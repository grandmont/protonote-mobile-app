# Protonote

## TODO

> Create abstraction on AsyncStorage

> Remove code from `<SpotifyIntegration />` component and move it to `useSpotify` hook

> Add refresh token to the integration model (if the user logs in a different device, it's not gonna find the token)

> Be sure to sync the API before the user logs out (we lose data)

> Deal with the unknown types

# In progress

> Add mood to the memo and remove required field for memo description (Partial)

> Check if there are integrations before requesting spotify data in the API `saveSpotifyTracks`

# Done

> Create method in the server that fetches the recently played tracks from the user periodically

> Add account option on settings and a delete account option

> Fix add memo bug (in the home screen)

> Fix android padding bug

> Test what happens if you try to use the app with no internet connection

> Save memo as you write, and make it offline (remove save button)
