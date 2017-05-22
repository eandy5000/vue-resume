<template>
    <div>
    <h3>Contact</h3>
    <span>Email: <a href="mailto:eandy5000@yahoo.com">eandy5000@yahoo.com</a></span>
    <span>Github: <a href="https://github.com/eandy5000">https://github.com/eandy5000</a></span>
    <span>Phone: <a href="tel:763-202-3537">763-202-3537</a></span>

    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    div {
        background-color: #2c3e50;
        color: white;
        padding: 1em;
        font-size: 120%;
        margin-top: 2em;
    }

    span {
        display: block;
        margin-bottom: 1em;
    }

    a {
        color: white;
    }

    @media screen and (min-width: 900px) {
        span {
            display: inline;
            padding-left: 1em;
        }
        span:nth-child(2) {
            padding-left: 0;
        }
    }
    
</style>
