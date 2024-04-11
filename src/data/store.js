import { reactive } from 'vue'

export const store = reactive({
    plansItems: [
        {
            icon: 'fa-heart-pulse',
            title: 'Team training',
            subtitle: 'Find a partner',
            text: 'Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. Tristique.',
            link: '',
            linkText: 'Find a partner',
            linkIcon: 'fa-chevron-right'
        },
        {
            icon: 'fa-dumbbell',
            title: 'Crossfit workout',
            subtitle: 'Push your limits',
            text: 'Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. Tristique.',
            link: '',
            linkText: 'Learn about Crossfit',
            linkIcon: 'fa-chevron-right'
        },
        {
            icon: 'fa-weight-scale',
            title: 'Weight loss plan',
            subtitle: 'Shed those pounds',
            text: 'Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. Tristique.',
            link: '',
            linkText: 'Schedule a workout',
            linkIcon: 'fa-chevron-right'
        },
    ]
})