import { Box, Button, Typography } from "@mui/material";
import {
    createBrowserRouter,
    Navigate,
} from "react-router-dom";
import HomePageLayout from "../Layouts/HomePageLayout/HomePage.layout";
import HomePage from "../Pages/Home/Home"
import { useLazyDemoQuery } from "../Services/demo";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../Store/store";
import { addUser } from "../Store/features/userSlice";
import { useEffect } from "react";


function RequireAuth({ children, redirectTo }: any) {
    let isAuthenticated = true;
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
}




const DemoComponent = () => {
    const [demo, { data }] = useLazyDemoQuery()
    let dispatch = useDispatch();

    const onClick = async () => {
        let response = await demo()
        dispatch(addUser(response.data))
    }

    return (
        <Box onClick={() => onClick()}>
            <Button variant="contained" onClick={() => demo()}>Click</Button>
            <Typography>

            </Typography>
            Demo
        </Box>
    )
}

export const appRouter = createBrowserRouter([
    {
        element: <HomePageLayout />,
        errorElement: <Box>Error</Box>,
        children: [
            // {
            //     path: "",
            //     element: <HomePage />
            // }
            {
                path: "/",
                element: <RequireAuth redirectTo="#login"><DemoComponent /></RequireAuth>,
            },
            // {
            //     path: "about",
            //     element: <><Box>Root--Child2</Box> </>,
            // },
        ],
    },
]);
