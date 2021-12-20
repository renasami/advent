<script lang="ts">
	import Task from "./Task.svelte"
	let title = "a"
	console.log(title)
</script>

<h1>svelte todo</h1>
<hr />
<div>
	<input bind:value={title}/>
	<button>追加</button>
	<ul>
	<Task contents={title}/>
	</ul>
	<button>終了済みタスク削除</button>
</div>

