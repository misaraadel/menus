<template>
<div class="heading-data">
    <h4 :class="`${headingStyle} text-heading font-bold`">
    {{ headContent }}
    </h4>

    <p :class="`${descriptionStyle} font-normal leading-paragraph`">
    {{ description }}
    </p>
</div>
</template>

<script>
export default {
    props: ['headContent' , 'headingStyle' , 'description' , 'descriptionStyle']
}
</script>