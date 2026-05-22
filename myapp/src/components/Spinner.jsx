import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';

const SpinnerExample     = () => {
    // false = Default UI | true = Submitting UI
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <div className="p-4 d-flex gap-2 align-items-center">
            {/* Submit / Submitting Button */}
            <Button variant="primary" disabled={isSubmitting} onClick={() => setIsSubmitting(true)} className="d-flex align-items-center gap-2" >
                {isSubmitting && ( <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />)}
                {isSubmitting ? 'Submitting...' : 'Click to Submit'}
            </Button>

            {/* Cancel Button */}
            <Button
                variant="danger" disabled={!isSubmitting}
                onClick={() => setIsSubmitting(false)}
                
                // Lowers opacity when not active to match the assignment document screenshot
                className={!isSubmitting ? 'opacity-75' : ''}
            >
                Cancel
            </Button>
        </div>
    );
};

export default SpinnerExample   ;