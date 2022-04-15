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
    },
    {
        name: 'm@rch',
    },
    {
        name: 'feb23',
    },
    {
        name: 'janewary',
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
            <Box width="120px" marginBottom="20px" paddingX="10px">
                <NextImage src="/Spotify_Logo_RGB_White.png" height={70} width={236} />
            </Box>
            <Box marginBottom="20px">
                <Box>
                <List spacing={2}>
                    {navMenu.map(menu => (

                        <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
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
                <Divider marginY={4} width="80%"/>
                <Box>
                <List spacing={2}>
                    {playlistMenu.map(menu => (

                        <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
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
                <Box height="66%" overflowY="auto" paddingY="20px">
                    h

                </Box>
            </Box>
        </Box>

    </Box>
        )
}

export default Sidebar;
    