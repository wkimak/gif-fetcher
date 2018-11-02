const { knex } = require('../database/index.js');

exports.postFavorites = async (req, res) => {
  try {
    const gifId = req.body.gifId;
    const stillUrl = req.body.stillUrl;
    const videoUrl = req.body.videoUrl;
    
    const checkExists = await knex.select('gif_id')
                                  .from('favorites')
                                  .where('gif_id', gifId);
    
    // gif_id is not yet stored in favorites table
    if(!checkExists.length) {
      try {
        const insertFavorite = await knex('favorites')
                                    .insert({ gif_id: gifId, still_url: stillUrl, video_url: videoUrl }); 
        
        const fetchFavoriteId = await knex.select('id_favorite')
                                          .from('favorites')
                                          .where('gif_id', gifId);
        
        const insertJoinTable = await knex('users_favorites')
                                      .insert({ user_id: req.body.userId, 
                                                favorite_id: fetchFavoriteId[0].id_favorite 
                                              });
        res.sendStatus(200);
      } catch {
          console.log('ERROR inserting into favorites/user_favorites table');
          res.sendStatus(500);
      }
      // gif_id was already stored in favorites table, so now check to see if it exists in users_favorites table
      // Currently, gif_ids are never removed from favorites table (They should be).
    } else {
        try {
          const fetchFavoriteId = await knex.select('id_favorite')
                                            .from('favorites')
                                            .where('gif_id', gifId);
          
          const checkExists = await knex.select('user_id', 'favorite_id')
                                        .from('users_favorites')
                                        .where('user_id', req.body.userId)
                                        .andWhere('favorite_id', fetchFavoriteId[0].id_favorite);
          
          // if user has not favorited Gif
          if(!checkExists.length) {
            const insertJoinTable = await knex('users_favorites')
                                         .insert({ user_id: req.body.userId, 
                                                   favorite_id: fetchFavoriteId[0].id_favorite 
                                                 });
          }
          res.sendStatus(200);
        } catch {
            res.sendStatus(500)
            console.log('ERROR inserting into user_favorites table'); 
        }
    }
  } catch {
    res.sendStatus(500);
    console.log('ERROR checking if gif_id exists in favorites table');
  } 
}

exports.fetchFavorites = async (req, res) => {
  try {
    const favorites = await knex('favorites')
                      .join('users_favorites', 'id_favorite', 'favorite_id')
                      .select('favorites.gif_id', 'favorites.still_url', 'favorites.video_url')
                      .where('users_favorites.user_id', req.query.userId);
                      

    res.send(favorites);
  } catch {
      console.error('ERROR fetching favorites');
      res.sendStatus(500);
  }
}

exports.deleteFavorites = async (req, res) => {
  console.log(req.query.gifId)

  try {
    const favoriteId = await knex.select('id_favorite').from('favorites').where('gif_id', req.query.gifId);
    const deletedFavorite = await knex('users_favorites')
                                  .where('user_id', req.query.userId)
                                  .andWhere('favorite_id', favoriteId[0].id_favorite)
                                  .del();
      res.sendStatus(200);
  } catch {
      console.log('ERROR deleting favorite from users_favorites table');
      res.sendStatus(500);
  }
}