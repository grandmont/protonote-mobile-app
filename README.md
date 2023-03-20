# Protonote

## TODO

> Create abstraction on AsyncStorage

> Remove code from `<SpotifyIntegration />` component and move it to `useSpotify` hook

> Add mood to the memo and remove required field for memo description (Partial)

> Save memo as you write (remove save button)

> Test what happens if you try to use the app with no internet connection

> Add refresh token to the integration model (if the user logs in a different device, it's not gonna find the token)

> Check if there are integrations before requesting spotify data in the API `saveSpotifyTracks`

# Done

> Create method in the server that fetches the recently played tracks from the user periodically

> Add account option on settings and a delete account option

> Fix add memo bug (in the home screen)

> Fix android padding bug