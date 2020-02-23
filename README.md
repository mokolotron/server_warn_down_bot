# server_warn_down_bot
Send message to telegram chanel when server was started

#Instalation
1. `git clone https://github.com/mokolotron/server_warn_down_bot.git`
2. `cd server_warn_down_bot` and rename file `api-sample.js` in `api.js`
3. open and fill all veriables in file `api.js`
  3.1 Create telegram bot in bot father and paste token in variable `token`
  3.2 Create the telegram channel and add your bot as amdmin to this channel
  3.3 Put this channel name in variable `userId`
4. run `npm start` to make sure that all data is correct. If its true you will recive message to your telegram chanel
5. Add this script to autostart for your system 
  5.1 `crontab -e`
  5.2 add this command to end of file `@reboot node /full/path/to/server_warn_down_bot/main.js`
  5.3 save the file
6.Enjoy
  
