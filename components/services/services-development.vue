<template>
<div class="container py-24">
    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        <template v-for="develop in development">
            <card 
            :key="develop.img"
            :boxImage="`${develop.img}`"
            :boxTitle="`${develop.title}`"
            :boxDesc="`${develop.desc}`" />
        </template>
    </div>
</div>
</template>

<script>
export default {
data(){
    return{
        development:[
            {
                img: 'development_1',
                title: 'تطوير الفكرة',
                desc: 'فريق المنيو سوف يقوم بتطوير فكرة المطعم وابتكار أفكار جديدة تساعدك في جذب المزيد من الزبائن'
            },{
                img: 'development_2',
                title: 'تطوير الهوية',
                desc: 'إعادة تطوير الهوية البصرية للمطعم حتي تتمكن من دخول المنافسة مرة اخري بشكل احترافي'
            },{
                img: 'development_3',
                title: 'تطوير المنيو',
                desc: 'إعادة هندسة المنيو وتطويره بما يتناسب مع فكرة المطعم والوصل الي شرائح جديدة من الزبائن'
            },{
                img: 'development_4',
                title: 'تطوير الفريق',
                desc: 'وضع خطة لتطوير أداء فريق العمل مع اعداد البرامج التدريبة اللازمة لتبدا العمل بشكل احترافي'
            },{
                img: 'development_5',
                title: 'تطوير المبيعات',
                desc: 'فريق المنيو سوف يساعدك في مواجهة تحديات المبيعات التي تواجه مطعمك مع مراعاة التكاليف'
            },{
                img: 'development_6',
                title: 'ادارة التكاليف',
                desc: 'مراجعة التكلفة المباشرة والغير مباشرة للمطعم مع وضع خطة احترافية للتحكم بمستوي الهالك'
            },{
                img: 'development_7',
                title: 'تطوير الوصفات',
                desc: 'تطوير الوصفات الحالية مع إمكانية إضافة وصفات جديدة تناسب الشريحة المستهدفة لمطعمك'
            },{
                img: 'development_8',
                title: 'تطوير العمليات',
                desc: 'وضع خطة لتطوير العمليات اليومية التي تتم اثناء التجهيز او اعداد الوجبات او التخزين لضمان الجودة'
            },{
                img: 'development_9',
                title: 'استراتيجية التسويق',
                desc: 'وضع استراتيجية للتسويق وإعادة بناء العلامة التجارية مع اعداد الخطة المناسبة للعروض الترويجية'
            }
        ]
    }
}
}
</script>