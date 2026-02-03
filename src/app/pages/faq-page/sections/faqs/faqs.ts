import { Component } from '@angular/core';
import { AccordionModule } from "primeng/accordion";
import { QuestionAnswerTab } from './question-answer-tab';

@Component({
    selector: 'app-faqs',
    imports: [AccordionModule],
    templateUrl: './faqs.html'
})
export class Faqs {
    tabs: QuestionAnswerTab[] = [
        {
            value: 0,
            title: 'Is the showroom visit really no obligation?',
            content: 'Yes. It\'s a chance to see our work and chat through your ideas — no pressure, no follow-up calls you didn\'t ask for.',
            icon: 'pi pi-check'
        },
        {
            value: 1,
            title: 'Do I need to know exactly what I want before visiting?',
            content: 'Not at all — that\'s what we\'re here for. Our designer will walk you through ideas and options during your free home visit, so you can figure out what works best for your space.',
            icon: 'pi pi-check'
        },
        {
            value: 2,
            title: 'Can you work with awkward spaces like sloped ceilings?',
            content: 'Absolutely — tricky spaces are our specialty. Sloped ceilings, alcoves, odd corners — we design furniture that fits your exact space perfectly, wall-to-wall and floor-to-ceiling.',
            icon: 'pi pi-check'
        },
        {
            value: 3,
            title: 'What if I don\'t like the initial design?',
            content: 'We\'ll work with you to get it right. Your designer will refine the layout, finishes, and details until you\'re completely happy — there\'s no charge for design revisions.',
            icon: 'pi pi-check'
        },
        {
            value: 4,
            title: 'How long does the whole process take?',
            content: 'From your initial visit to installation, it typically takes 6-8 weeks. We\'ll keep you updated throughout, and installation itself usually takes just 1-2 days depending on the project size.',
            icon: 'pi pi-check'
        },
        {
            value: 5,
            title: 'Will there be much mess or disruption?',
            content: 'Very little — our fitters are tidy and respectful of your home. We\'ll protect your floors and furniture, clean up thoroughly after installation, and leave you with nothing but beautiful fitted furniture.',
            icon: 'pi pi-check'
        },
        {
            value: 6,
            title: 'How much does it cost?',
            content: 'Every project is unique, so pricing depends on size, style, and finishes. As a guide, fitted bedrooms typically range from £3,000-£8,000+, and we\'ll give you a transparent quote with no hidden costs after your design visit.',
            icon: 'pi pi-check'
        },
        {
            value: 7,
            title: 'Do I have to pay everything upfront?',
            content: 'No — we split payments to make things easier. You\'ll pay 30% when you place your order, 40% when you approve the final design, and the remaining 30% after installation is complete.',
            icon: 'pi pi-check'
        },
        {
            value: 8,
            title: 'What guarantee do you offer?',
            content: 'All our furniture comes with a comprehensive warranty covering manufacturing defects. We\'re also endorsed by Which? Trusted Traders, and if any issues come up after installation, just get in touch and we\'ll fix it promptly.',
            icon: 'pi pi-check'
        },
        {
            value: 9,
            title: 'Can I see examples of similar projects?',
            content: 'Of course — we\'ll show you photos of completed projects similar to yours during your visit. Our designer can also share examples of different finishes, door styles, and interior layouts so you can see what\'s possible for your space.',
            icon: 'pi pi-check'
        }
    ]
}