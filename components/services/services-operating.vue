<template>
<div class="container py-24">
    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        <template v-for="operating in operation">
            <card 
            :key="operating.img"
            :boxImage="`${operating.img}`"
            :boxTitle="`${operating.title}`"
            :boxDesc="`${operating.desc}`" />
        </template>
    </div>
</div>
</template>

<script>
export default {
data(){
    return{
        operation:[
            {
                img: 'operation_1',
                title: 'إدارة التشغيل',
                desc: 'ادارة العمليات اليومية والاشراف علي أداء الفريق لضمان مستوي الخدمة والجودة المقدمة للزبائن'
            },{
                img: 'operation_2',
                title: 'إدارة المبيعات',
                desc: 'وضع خطط لزيادة المبيعات واستهداف شرائح جديدة بالإضافة الي تطوير المنتجات وطرق التقديم'
            },{
                img: 'operation_3',
                title: 'إدارة التكاليف',
                desc: 'إدارة التكاليف المباشرة والتكاليف التشغيلية ونسبة الهالك لضمان تحقيق اعلي ربحية للمطعم'
            },{
                img: 'operation_4',
                title: 'إدارة المشتريات',
                desc: 'فريق المنيو سوف يضع خطة لإدارة المشتريات والموردين بالإضافة الي إدارة مستوي المخزون'
            },{
                img: 'operation_5',
                title: 'إدارة التسويق',
                desc: 'وضع خطة استراتيجية للتسويق واستهداف المزيد من الزبائن بالأضافة لخطة العروض الترويجية المتنوعة'
            },{
                img: 'operation_6',
                title: 'إدارة الفريق',
                desc: 'إدارة وتطوير أداء الفريق مع وضع البرامج التدريبية اللازمة لرفع كفاءة العمالة وخفض تكاليف التشغيل'
            }
        ]
    }
}
}
</script>