import LoginRouter from '../resources/views/login/app.router';
import ForgotPasswordRouter from '../resources/views/forgot-password/app.router';
import RegisterRouter from '../resources/views/register/app.router';
const config = {prefix: "/auth"};

export default [

    {
        path: `${config.prefix}/login`,
        component: () => import('../resources/views/login/app.component'),
        children: LoginRouter,
        meta: { }
    },
    {
        path: `${config.prefix}/forgot-password`,
        component: () => import('../resources/views/forgot-password/app.component'),
        children: ForgotPasswordRouter,
        meta: { }
    },
    {
        path: `${config.prefix}/register`,
        component: () => import('../resources/views/register/app.component'),
        children: RegisterRouter,
        meta: { }
    },
];
