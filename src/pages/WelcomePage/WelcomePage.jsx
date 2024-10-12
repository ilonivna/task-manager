import BenefitsList from "../../components/BenefitsList/BenefitsList";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import css from "./WelcomePage.module.css"

export default function WelcomePage() {
    return (
        <div>
            <DocumentTitle>Welcome</DocumentTitle>
            <h1 className={css.title}>Start improving your life by simply managing your tasks.</h1>
            <p className={css.subtitle}>Multiple studies have shown tremendously positive effects of keeping a daily planner and here are just a few of benefits you will definitely partake in once you start writing down your tasks</p>
            <BenefitsList/>
        </div>
    );
};