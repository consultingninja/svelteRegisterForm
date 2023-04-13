<script lang="ts">

    import {goto} from '$app/navigation'
    export let data;

    let navChoice =  '/';

    function handleNav(e:any){
        console.log(e.target.value);
        goto(e.target.value,{noScroll: false})
    }
</script>


<h1>Welcome to Consulting Ninja</h1>
<p>Visit my channel <a href="https://www.youtube.com/channel/UCwPrPv9eS7Xgfp_wi7uxt0g">@ConsultingNinja</a> to see more great videos!</p>

{#if data.URLList.length}
<p>Check out all of these registered users!</p>
<form>
    <select bind:value={navChoice} name="urlList" on:change={handleNav}>
        <option value="/">User List</option>
    {#each data.URLList as URL}
        <option value={URL}>{URL}</option>
    {/each}
    </select>
</form> 
{/if}

<style>
    a{
        color:#007bff;
        text-decoration: none;
    }
    a:hover{
        text-decoration: underline;
        text-decoration-color: #FFF ;

    }
</style>