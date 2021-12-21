<script lang="ts">
import type { Task } from "svelte/internal";

    import {taskList} from "./stores"
    import type {TaskType} from "./types"

    export let task:TaskType
    const handleOnClick = () => {
        const newTask:TaskType[] = $taskList.map((t,i) => {
            if (task.id !== i) return t
            return {
                id: t.id,
                text: t.text,
                done:!t.done
            }
        })
        taskList.update(() => [...newTask])
    }
</script>

<li>
    <input type="checkbox" checked={task.done} on:click={handleOnClick}>
    <p>{task.text}</p>
</li>

<style>
    li {
        display:flex;
        margin:10px;
    }

    p {
        margin:0;
        margin-left: 10px;
    }
</style>