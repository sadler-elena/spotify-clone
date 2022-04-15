import NextImage from 'next/image'
import NextLink from 'next/link'
import {
    Box,
    List,
    ListItem,
    ListIcon,
    Divider,
    Center,
    LinkBox,
    LinkOverlay,
} from '@chakra-ui/layout'
import {
    MdHome,
    MdSearch,
    MdLibraryMusic,
    MdFavorite,
    MdPlaylistAdd,
} from 'react-icons/md'

const navMenu = [
    {
        name: 'Create',
        icon: MdHome,
        route: '/',
    },
    {
        name: 'Search',
        icon: MdSearch,
        route: '/search',
    },
    {
        name: 'Library',
        icon: MdLibraryMusic,
        route: '/library',
    },
]

const playlistMenu = [
    {
        name: 'Create Playlist',
        icon: MdPlaylistAdd,
        route: '/playlists',
    },
    {
        name: 'Favorites',
        icon: MdFavorite,
        route: '/playlists/new',
    },
]

const playlists = [
    {
        name: 'apri1 ♈️',
        route: '/playlists/apri1',
    },
    {
        name: 'm@rch',
        route: '/playlists/m@rch',
    },
    {
        name: 'feb23',
        route: '/playlists/feb23',
    },
    {
        name: 'janewary',
        route: '/playlists/janewary',
    },
    {
        name: 'paradise',
        route: '/playlists/paradise',
    },
    {
        name: 'heartlines',
        route: '/playlists/heartlines',
    },

]

const Sidebar = () => {
    return (
    <Box 
        width="100%"
        height="calc(100vh - 100px)"
        bg="black"
        paddingX="5px"
        color="gray">
        layout
        <Box paddingY="20px" height="100%">
            <Box marginBottom="20px" paddingX="20px">
                <NextImage src="/Spotify_Logo_RGB_White.png" width="120px" height="35px" />
            </Box>
            <Box marginBottom="20px" paddingLeft={2}>
                <Box>
                <List spacing={2}>
                    {navMenu.map(menu => (

                        <ListItem paddingX="20px" fontSize="14px" fontWeight="bold" key={menu.name}>
                            <LinkBox>
                                <NextLink href={menu.route} passHref>
                                    <LinkOverlay>
                                    <ListIcon as={menu.icon} color="white" marginRight="20px" />
                                    {menu.name}
                                    </LinkOverlay>
                                </NextLink>
                            </LinkBox>
                        </ListItem>
                    ))}
                    </List>
                </Box>
                <Divider marginY={4} width="80%" color={'gray.700'}/>
                <Box>
                <List spacing={2}>
                    {playlistMenu.map(menu => (
                        <ListItem paddingX="20px" fontSize="14px" fontWeight="bold" key={menu.name}>
                            <LinkBox>
                                <NextLink href={menu.route} passHref>
                                    <LinkOverlay>
                                    <ListIcon as={menu.icon} color="white" marginRight="20px" />
                                    {menu.name}
                                    </LinkOverlay>
                                </NextLink>
                            </LinkBox>
                        </ListItem>
                    ))}
                    </List>
                </Box>
                <Divider marginY={4} width="80%" color={'gray.700'}/>      
                <Box height="66%" overflowY="auto">
                    <List spacing={2}>
                        {playlists.map(menu => (

                            <ListItem paddingX="20px" fontSize="14px" key={menu.name}>
                                <LinkBox>
                                    <NextLink href={menu.route} passHref>
                                        <LinkOverlay>
                                        {menu.name}
                                        </LinkOverlay>
                                    </NextLink>
                                </LinkBox>
                            </ListItem>
                        ))}
                        </List>

                </Box>
            </Box>
        </Box>

    </Box>
        )
}

export default Sidebar;
    