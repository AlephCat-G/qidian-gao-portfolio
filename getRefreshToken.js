const { google } = require('googleapis');
const readline = require('readline');

const oauth2Client = new google.auth.OAuth2(
    '202629551296-r6viaqbilf4eu9ejts5b7ggkl1cbb9bg.apps.googleusercontent.com',
    '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GOCSPX-G9zea4iMyjCQ-A6nCDbPeVaZTkQu',
    'http://localhost:3000'
);

const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Generate the URL to get the authorization code
const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
});

console.log('Authorize this app by visiting this URL:', authUrl);

rl.question('Enter the code from that page here: ', async (code) => {
    try {
        const { tokens } = await oauth2Client.getToken(code);
        console.log('Access Token:', tokens.access_token);
        console.log('Refresh Token:', tokens.refresh_token);
        rl.close();
    } catch (error) {
        console.error('Error retrieving access token', error);
        rl.close();
    }
});
