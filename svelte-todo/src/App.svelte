<script lang="ts">
	import Task from "./Task.svelte"
	import {taskList} from "./stores"
	let text = ""
	const addTask = () => {
		if (!text) return
		taskList.update((task) => [...task,{
			id:task.length,
			text:text,
			done:false
		}])
		text = ""
	}

	const delteTask = () => {
		const newTask = $taskList.filter((task) => !task.done)
		console.log(newTask)
		taskList.update(() => [...newTask])
	}

</script>

<h1>svelte todo</h1>
<hr />
<div>
	<input bind:value={text}/>
	<button on:click={addTask}>追加</button>
	<ul>
	{#each $taskList as task }
		<Task task={task}/>
	{/each}
	</ul>
	<button on:click={delteTask}>終了済みタスク削除</button>
</div>

