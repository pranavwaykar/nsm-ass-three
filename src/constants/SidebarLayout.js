
 const SidebarLayout = {
    logo: {
        content: "Muamelat",
        image: "https://www.mecellem.com/_next/static/media/muamelat.60d82ac1.svg",
        onClick: () => console.log("Logo Clicked")
    },
    menus: [
        {
            id: "overview",
            content: "Overview",
            icon: "icon-objects-column-2",
            onClick: () => console.log("overview")
        },
        {
            id: "client-based",
            content: "Client Based",
            icon: "icon-buildings-3",
            onClick: () => console.log("overview")
        },
        {
            id: "teams",
            content: "Teams",
            icon: "icon-users-two",
            onClick: () => console.log("overview")
        },
        {
            id: "stages-folders",
            content: "Stage",
            icon: "icon-align-right",
            onClick: () => console.log("overview")
        },
        {
            id: "activities",
            content: "Activities",
            icon: "icon-activity",
            onClick: () => console.log("overview")
        },
        {
            id: "operational",
            content: "Operational",
            icon: "icon-gears-arrows-rotate",
            onClick: () => console.log("overview")
        },
        {
            id: "calendar",
            content: "Calendar",
            icon: "icon-calender-days-2",
            onClick: () => console.log("overview")
        }
    ],
    user: {
        name: "Peter Parker",
        thumbnail:
          "https://donttellharry.com/wp-content/uploads/2019/12/how-many-andrew-garfield-spider-man-movies-are-there.jpg?w=600",
        email: "peterparker@nextsmartmove.ai",
      },
    userPopupMenus: [
        {
            icon: "icon-language-2",
            content: "Language",
            subMenus: [
                {
                    content: "Turkish",
                    active: false,
                    onClick: () => { }
                },
                {
                    content: "English",
                    active: true,
                    onClick: () => { }
                },
            ]
        },
        {
            icon: "icon-book-solid",
            content: "User Guides",
            onClick: () => console.log("clicked!")
        },
        {
            content: "Clarification Text",
            onClick: () => console.log("clicked!")
        },
        {
            content: "Consent Text",
            onClick: () => console.log("clicked!")
        },
        {
            icon: "icon-logout",
            content: "Logout",
            onClick: () => console.log("clicked!")
        }
    ],
    theme: {
        color: "#fff",
        bg: "#002874",
        active: "#1F94FF",
        fontMain: "#111519",
        fontLight: "#9EAAB4"
    }
}

export {SidebarLayout};