import { Feather } from "@expo/vector-icons";

export const icons = {
    index: (props)=> <Feather name="home" size={26} {...props} />,
    promotion: (props)=> <Feather name="percent" size={26} {...props} />,
    favorite: (props)=> <Feather name="heart" size={26} {...props} />,
    user: (props)=> <Feather name="users" size={26} {...props} />,
    profile: (props)=> <Feather name="user" size={26} {...props} />,
}