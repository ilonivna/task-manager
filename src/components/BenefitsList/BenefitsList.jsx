import css from "./BenefitsList.module.css"

export default function BenefitsList() {
return (
    <div className={css.wrapper}>
        <ul className={css.list}>
            <li className={css.listItem}>
                <h4 className={css.listItemTitle}>
                Help You Manage Your Time More Effectively
                </h4>
                <p className={css.listItemText}>
                If you’re anything like us, life comes at you fast and keeps coming. Sometimes it feels like you can’t catch a break. Leaping from one thing to another is not an efficient time management practice. The purpose of planners or task managers is to keep us on track with what needs to be done and when. 
                Filling out a calendar for the week allows you to effectively budget time for work, family, and friends. It’s the ultimate personalized time management tool.
                </p>
            </li>
            <li className={css.listItem}>
                <h4 className={css.listItemTitle}>
                Writing as well as Typing Things Down in A Planner Improves Memory
                </h4>
                <p className={css.listItemText}>
                It’s so easy to forget you and your spouse’s anniversary when you have so much to do each day. With a planner, you can write down important yearly events, such as birthdays, so you won’t forget them. Remember: writing down an important task or event makes us less likely to forget it even when we don’t have our planner on hand.
                </p>
            </li>
            <li className={css.listItem}>
                <h4 className={css.listItemTitle}>
                Task Managers Allow Us to Do More Self-Care
                </h4>
                <p className={css.listItemText}>
                With work obligations and making time for family and friends, it’s easy to lose sight of taking care of your own needs. But self-care is critically important. It’s essential that you not only remember to schedule and keep doctor’s appointments, which your planner helps you remember, but that you also carve out time for things like exercise and outdoor activities.
                </p>
            </li>
            <li className={css.listItem}>
                <h4 className={css.listItemTitle}>
                Give You a Place to Store Important Records
                </h4>
                <p className={css.listItemText}>
                When was the last time you took your dog to the vet for their annual checkup? If you don’t remember, it’s probably been too long. With your planner handy, you can easily reference things that you’ve long forgotten.

                Your planner offers you a written record for scheduling important appointments, vaccinations, etc. It allows you to plan and prepare for what’s coming down the road when it comes to caring for you and your family members — those with two legs and those with four.
                </p>
            </li>
            <li className={css.listItem}>
                <h4 className={css.listItemTitle}>
                Reduce Your Stress
                </h4>
                <p className={css.listItemText}>
                When we write down our daily, weekly, and monthly tasks and goals, we make them manageable. It’s much easier to move from one task to the next than it is to think about everything we need to do at once.

                Without a planner to assist in the scheduling of tasks, we can feel overwhelmed. When we block out our time it is much easier to see how much we have actually accomplished. The purpose of planners is to reduce the stress that comes with thinking that we can’t possibly accomplish everything we need to do in a given day.
                </p>
            </li> <li className={css.listItem}>
                <h4 className={css.listItemTitle}>
                Using a Task Planner Frees Up Time for Creative Endeavors
                </h4>
                <p className={css.listItemText}>
                We’ve noticed something incredible with those who proactively use planners: they have more time to focus on their hobbies and creative endeavors. When you outline what you need to do on a given day, you give yourself the freedom to do what you want to do.
                </p>
            </li>
        </ul>
    </div>
)
}