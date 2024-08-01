import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/';
import AnimatedImage from './AnimatedImage';

jest.mock('framer-motion', () => ({
    motion: {
        div: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
        img: jest.fn(({ ...props }) => <img {...props} />),
    },
}));

describe('AnimatedImage', () => {
    test('renders with given src and alt', () => {
        const src = 'test.jpg';
        const alt = 'test image';
        render(<AnimatedImage src={src} alt={alt} />);

        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('src', src);
        expect(image).toHaveAttribute('alt', alt);
    });

    test('renders with given title', () => {
        const title = 'Test Title';
        render(<AnimatedImage src="test.jpg" alt="test image" title={title} />);

        const titleElement = screen.getByText(title.substring(0, title.length-2));
        expect(titleElement).toBeInTheDocument();
        const subTitleElement = screen.getByText(/le$/);
        expect(subTitleElement).toBeInTheDocument();
    });

    test('renders with given bannerStats', () => {
        const bannerStats = ['Stat 1', 'Stat 2', 'Stat 3'];
        render(<AnimatedImage src="test.jpg" alt="test image" bannerStats={bannerStats} />);

        bannerStats.forEach(stat => {
            const statElement = screen.getByText(stat);
            expect(statElement).toBeInTheDocument();
        });
    });

    test('increments key when src changes', () => {
        const { rerender } = render(<AnimatedImage src="test1.jpg" alt="test image" />);
        const initialImage = screen.getByRole('img') as HTMLImageElement;

        rerender(<AnimatedImage src="test2.jpg" alt="test image" />);
        const newImage = screen.getByRole('img') as HTMLImageElement;

        expect(initialImage).not.toBe(newImage); // Ensure the image element is re-rendered
        expect(newImage.src).toContain('test2.jpg'); // Check the new src value
    });
});