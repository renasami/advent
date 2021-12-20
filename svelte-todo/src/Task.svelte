<script lang="ts">
    export let contents = ""
</script>

<li>
    <input type="checkbox">
    <p>{contents}</p>
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