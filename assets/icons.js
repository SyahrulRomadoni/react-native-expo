import { Feather } from "@expo/vector-icons";

export const icons = {
    index: (props)=> <Feather name="home" size={26} {...props} />,
    promo: (props)=> <Feather name="percent" size={26} {...props} />,
    wishlist: (props)=> <Feather name="heart" size={26} {...props} />,
    profile: (props)=> <Feather name="user" size={26} {...props} />,
}