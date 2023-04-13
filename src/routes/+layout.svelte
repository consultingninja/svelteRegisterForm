
<script lang="ts">
import Modal from '$lib/Modal.svelte';
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

<Modal>
	<h2 slot="header">
		Admin Options
	</h2>

    <form bind:this={layoutForm}>
        <label for="layout">Navigation Location</label>
        <select name="layout" value={$layout} on:change={()=>layout.set(layoutForm.layout.value)}>
            <option value="top">Top</option>
            <option value="side">Side</option>
        </select>
        <hr />

        <div class="layout-color-option">
            <label for="primary">Primary Color</label>
            <input type="color" id="primary" name="primary" value={thisPrimaryColor} on:change={(e)=> primaryColor.set(e.target?.value) }>
        </div>
        <div class="layout-color-option">
            <label for="secondary">Secondary Color</label>
            <input type="color" id="secondary" name="secondary" value={thisSecondaryColor} on:change={(e)=> secondaryColor.set(e.target?.value)}>
        </div>
        <div class="layout-color-option">
            <label for="text">Text Color</label>
            <input type="color" id="text" name="text" value={thisTextColor} on:change={(e)=> textColor.set(e.target?.value)}>
        </div>
        <hr />
        <div class="layout-option">
            <label for="carousel">Carousel</label>
            <input type="checkbox" name="carousel" value="carousel" on:change={()=> carousel.set(!$carousel)} checked={$carousel} />

        </div>
        <div class="layout-option">
            <label for="hero">Hero</label>
            <input type="checkbox" name="hero" value="hero" on:change={()=> hero.set(!$hero)} checked={$hero} />
        </div>
        <div class="layout-option">
            <div>
                <label for="message">Custom Message</label>
            </div>

            <textarea cols={20} name="message" on:change={(e)=> message.set(e.target?.value??'')} />
        </div>

    </form>

</Modal>


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
    select{
        width: 100%;
    }
    .layout-option{
        margin-bottom:.5em;
    }
    .layout-color-option{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: .2em;
    }

</style>