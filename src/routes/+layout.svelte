
<script lang="ts">
import Navbar from "$lib/Navbar.svelte";
import {afterNavigate} from '$app/navigation';
import {page} from '$app/stores'
import {layout, carousel,hero,message,primaryColor,secondaryColor,textColor} from '../stores';

 afterNavigate( () => {if($page.route.id === '' || $page.route.id === '/' || $page.route.id === '/signup'){
    layout.set('top');
    primaryColor.set("#242424");
    secondaryColor.set("#FFF");
    textColor.set("#FFF")
 } });

let layoutForm:HTMLFormElement;
$: thisPrimaryColor = $primaryColor;
$: thisSecondaryColor = $secondaryColor;
$: thisTextColor = $textColor;

</script>

<div class='main-app'  class:top={$layout==='top'} class:side={$layout==='side'}>
    <Navbar/>

    <div class="main-content" style="--theme-primaryColor: {thisPrimaryColor}; --theme-textColor: {thisTextColor}">
        <slot>
        </slot>
    </div>

</div>



<svelte:head>
    <style>
        body{
            margin:0;
        }
    </style>
    		<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
</svelte:head>




<style>
    .main-app{
        margin: 0;
        background-color: #242424;
        color: #FFF;
        display: flex;

    }
    .top{
        height: 100vh;
        width: 100vw;
        flex-direction: column;
        align-items: center;

    }
    .side{
        height: 100vh;
        flex-direction: row;
        align-items: flex-start;

    }
    .main-content{
        background-color: var(--theme-primaryColor);
        color: var(--theme-textColor);
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;

    }


</style>