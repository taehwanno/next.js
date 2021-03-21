import Example from 'components/example';

export interface HomeProps {
  title: string;
}

export default function Home({ title }: HomeProps) {
  return <div>{title} <Example /></div>;
}
