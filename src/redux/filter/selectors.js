import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";
import { selectTasks } from "../tasks/selectors";

export const selectStatusFilter = (state) => state.filters.status;

export const selectVisibleTasks = 
createSelector([selectTasks, selectStatusFilter], (tasks, statusFilter) => {
    switch (statusFilter) {
        case statusFilters.active:
            return tasks.filter((task) => !task.completed);
        case statusFilters.completed:
            return tasks.filter((task) => task.completed);
        default:
            return tasks;
    
    }
    });