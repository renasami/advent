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

</script>

<h1>svelte todo</h1>
<hr />
<div>
	<input bind:value={text}/>
	<button on:click={addTask}>追加</button>
	<ul>
	{#each $taskList as task }
		{#if !task.done}
			<Task task={task}/>
		{/if}
	{/each}
	</ul>
</div>

