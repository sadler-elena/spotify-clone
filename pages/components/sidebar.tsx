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
} from 'react-icons/md'

const navMenu = [
    {
        name: 'Home',
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

const Sidebar = () => {
    return (
    <Box 
        width="100%"
        height="calc(100vh - 100px)"
        bg="black"
        paddingX="5px"
        color="gray">
        layout
        <Box paddingY="20px">
            <Box width="120px" marginBottom="20px" paddingX="20px">
                <NextImage src="/Spotify_Logo_RGB_White.png" height={70} width={236} />
            </Box>
            <Box marginBottom="20px">
                <List spacing={2}>
                    {navMenu.map(menu => (

                        <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                            <LinkBox>
                                <NextLink href={menu.route} passHref>
                                    <LinkOverlay>
                                    <ListIcon as={menu.icon} color="white" marginRight="20px" />
                                    </LinkOverlay>
                                </NextLink>
                            </LinkBox>
                        </ListItem>
                    ))}
                    </List>
            </Box>
            content
        </Box>

    </Box>
        )
}

export default Sidebar;
    