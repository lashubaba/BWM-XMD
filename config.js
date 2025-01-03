const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVW2+rRhD+K9G+mhyDDcZYilSMbWLjG77j6jysYYHF3LwsNhBZ6lurtqpy1KrqS/5jfkKFnTR56DlNeRih2eHbb2a+GR5AGOEEaSgHrQcQE3yEFJWvNI8RaIF2atuIAAZYkELQAomsGLV5xYhQxcO7Iln2U2FQmyb3hrHR+iGylb4yQ17RXPXvwJkBcbrzsfkNwPqILNlqsJW7w810zO3lLFlVO96oup0Unu/lsewom1DLPVe+A+cSEWKCQ6cbuyhABPoayqcQk4/Rr6nDNZx2NpKs3uPpCTt2rMJl0h4OJzMuJQUPBe9gjDNS5z9Gv1uRhe5MOLH1U82BLDajyOhNURq0d77R5oi7HhwP/YgOV80r/QQ7IbL6FgoppvmH664NCzV1uhNxOxDgbmf1xP2guszm1Jwf7JHGzWXHLMZEWq2XHyOe10ZCqPZj13TavYNlELWQj9aGTNprb5V2RokvcVDsDSYb9j3xKXnVyv7/1F1rS8Vk4fPouFbH41N9506cGAmFpWfsRCUuK2z14oSsRi36YN13rDurW4tKv8cFMOyZuTHDTq8wtnV9q1f2Is7W6aBvN7PkjT6kKfkWy7p7Sg9ROplO/fE+i6r2wudP3EBWvVXoLeJk4YWSKArFvrrS7vs2Wslrd7nZNNhiu3Q39qBdo11bH9t1MrE2M12acUPOc+4uGe1R3rdAizszgCAHJ5RAiqPw4mMAtI5zZBJEL8UFXNWoENcPNic2E+X9kRxn9iluNpSJkil7U51yO5M2tUPvOLoDDIhJZKIkQdY9TmhE8hFKEuigBLS+/8yAEGX02rbysjrHABuThC7DNPYjaL329PUQmmaUhnSeh6ZSviACWuybG1GKQycpq5iGkJguPiLFhTQBLRv6CTozwEJHbKISD8QUGt0GNed+Kq6RtjLmGolOJWU3Cq8hdVZAUhNyt5ZUk275hi3eNkUT3iLL5hsSJ4gWVwMMwC8TU37z1QYOBqxmrbuSY69JAU3cPDXWB3VmrO+dSxOulUcEWaBFSYoYsIPmPo0X0R6F38ANT6jg0nCm9Q+VkbDnK253Pz+6s21l9A732lHQenjbUkpklXhTXZLEmS4DBgQXAeIyc4kXBb7ebEhSrcXx3yWfTmUdYRx/ChEFDAhhGQyenx5/unl+evy1NL/dlPbLzavzr9L8UJpfbq72EvT89Phzaf64OH8vzY//RH65njw/Pf558ZUZvLS35GYhCrGfgBZQpruEFxK1O1JPdTFRVbnryIpTpvEqh9epuuo2jE9LnA86PtoaA7JsHgdifTitqebBmPC+tk0FJxN4ZdVWzLt/ASkR9kq1V3i9EU8kEwW9/WxscBEtdsN0rHNI19u52rHFoRdDuJQUyGW6brHe3qnW2DXbDGp9KDeN9nx3GFYrC78tepTvlCP4Ksv3l2Fv3vW6UmNLtXXVO00725pz30nmwv2Br8+zLM+yqN+pGKKSp8lx0cDHlREtuWo1IEHb3OYzvOzG8wGJG5IvWoZ8hCTz9Ou8X/aN/7Ln8WUWH15EbGN0WZsv/f0vGbyNE3tm3kG87OGvSLa9bZi9foJ1YROsFchNhzmS8kJyQy3opIN5sEuNEUKyr+shOJ8/MyD2IbUjEpR/+WAHAQN8mFD5bR0scIASCoMYtDixLkisyLMiA4JcjuM5hfR1iwC5fDRrA85/A6DprD9fCAAAI',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

