import {
    faGithub,
    faLinkedin,
    faTelegram,
    faInstagram,
    faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Strings from "@/constants/strings";
import type { ISocialLinkItem } from "@/types";

const contacts: ISocialLinkItem[] = [
    {
        name: Strings.linkedIn,
        url: Strings.linkedInLink,
        icon: faLinkedin,
        text: Strings.linkedInUsername,
    },
    {
        name: Strings.email,
        url: Strings.primaryEmailLink,
        icon: faEnvelope,
        text: Strings.primaryEmail,
    },
    {
        name: Strings.whatsappUsername,
        url: Strings.whatsappLink,
        icon: "/images/icons8-whatsapp-50.png",
        text: Strings.whatsappUsername,
    }
];

export default contacts;
