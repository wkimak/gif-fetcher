const { knex } = require('../database/index.js');

exports.postFavorites = async (req, res) => {
  try {
    const gifId = req.body.gifId;
    const gifUrl = req.body.gifUrl;
    
    const checkExists = await knex.select('gif_id').from('favorites').where('gif_id', gifId);

    if(!checkExists.length) {
      try {
        const insertFavorite = await knex('favorites').insert({ gif_id: gifId, url: gifUrl }); 
        const fetchFavoriteId = await knex.select('id_favorite')
                                          .from('favorites').where('gif_id', gifId);
        const insertJoinTable = await knex('users_favorites')
                                      .insert({ user_id: req.body.userId, 
                                                favorite_id: fetchFavoriteId[0].id_favorite 
                                              });
        res.sendStatus(200);
      } catch {
          console.log('ERROR inserting into favorites/user_favorites table');
      }
    } else {
        try {
          const fetchFavoriteId = await knex.select('id_favorite').from('favorites').where('gif_id', gifId);
          const checkExists = await knex.select('user_id', 'favorite_id')
                                        .from('users_favorites').where('user_id', req.body.userId)
                                        .andWhere('favorite_id', fetchFavoriteId[0].id_favorite);
          if(!checkExists.length) {
            const insertJoinTable = await knex('users_favorites')
                                         .insert({ user_id: req.body.userId, 
                                                   favorite_id: fetchFavoriteId[0].id_favorite 
                                                 });
          }
          res.sendStatus(200);
        } catch {
            console.log('ERROR inserting into user_favorites table');
        }
    }
  } catch {
    console.log('ERROR checking if gif_id exists in favorites table');
  } 
}

exports.fetchFavorites = async (req, res) => {
  try {
    const favorites = await knex('favorites')
                      .join('users_favorites', 'id_favorite', 'favorite_id')
                      .select('favorites.gif_id', 'favorites.url')
                      .where('users_favorites.user_id', req.query.userId);
    res.send(favorites);
  } catch {
      console.log('ERROR fetching favorites');
  }
}

exports.deleteFavorites = async (req, res) => {
  try {

    const favoriteId = await knex.select('id_favorite').from('favorites').where('gif_id', req.query.gifId);
    
    const deletedFavorite = await knex('users_favorites')
                                  .where('user_id', req.query.userId)
                                  .andWhere('favorite_id', favoriteId[0].id_favorite)
                                  .del();
  } catch {
      console.log('ERROR deleting favorite from users_favorites table');
  }
}