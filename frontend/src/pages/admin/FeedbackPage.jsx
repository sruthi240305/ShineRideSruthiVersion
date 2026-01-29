import FeedbackTable from '@/components/tables/FeedbackTable';

const FeedbackPage = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--active)' }}>Customer Feedback</h1>
            <FeedbackTable />
        </div>
    );
};

export default FeedbackPage;