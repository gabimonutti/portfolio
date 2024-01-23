import { Timeline } from 'flowbite-react';

export default function TimelineItem ({ date, title, description }) {
    const paragraphs = description.split('-').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
    ));

    description.split('-').forEach((par) => console.log(par));
    
    return (
        <Timeline.Item>
            <div
                className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"
            ></div>
            <Timeline.Content className='pl-4'>
                <Timeline.Time>
                    <span className='text-xs'>
                        { date }
                    </span>
                </Timeline.Time>
                <Timeline.Title>
                    <span className='text-yellow-200 font-bold'>
                        { title }
                    </span>
                </Timeline.Title>
                <Timeline.Body>
                    { paragraphs }
                </Timeline.Body>
            </Timeline.Content>
        </Timeline.Item>
    );
}