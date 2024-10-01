import css from "./Layout.modules.css";

export const Layout = ({ children }) => {
    return (
        <main className={css.container}>{children}</main>
    );
};