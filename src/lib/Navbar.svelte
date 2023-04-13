<script>
    import {showModal,layout,primaryColor,secondaryColor,textColor} from '../stores';

    $: thisPrimaryColor = $primaryColor;
    $: thisSecondaryColor = $secondaryColor;
    $: thisTextColor = $textColor;

</script>

<nav class="nav-base"  class:top={$layout==='top'} class:side={$layout==='side'} style="--theme-primaryColor: {thisPrimaryColor}; --theme-textColor: {thisTextColor}; --theme-secondaryColor: {thisSecondaryColor}">
    <a href="/">Home</a>
    <a href="/signup">Sign Up</a>

</nav>

<style>
    .nav-base{
        display: flex;
    }
    .top{
        width:100%;
        padding-top: 1em;
        background: linear-gradient(to right, var(--theme-secondaryColor), var(--theme-primaryColor));
        flex-direction: row;
        justify-content: center;
        border-bottom: 1px solid rgba(122, 117, 117,0.3);
        padding-bottom: 1em;

    }
    .side{
        height:100vh;
        padding-right: 1em;
        flex-direction: column;
        justify-content: center;
        background: linear-gradient(to bottom, var(--theme-secondaryColor), var(--theme-primaryColor));
        border-right: 1px solid rgba(122, 117, 117,0.3);


    }
    .side a{
        color:#FFF;
        text-decoration: none;
        margin-bottom: 1em;
        font-size: larger;
    }

    a{
        color:#000000;
        text-decoration: none;
        margin-left: 1em;
        font-size: larger;
    }
    a:hover{
        opacity: .8;
        border-bottom: 2px solid #FFF;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);

    }


</style>