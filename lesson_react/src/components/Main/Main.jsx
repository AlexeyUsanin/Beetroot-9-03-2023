import Card from '../Card/Card';
import Container from '../Container/Container';
import Button from '../Button/Button';

const data1 = {
  title: 'Card title 1',
  text: 'Card 1',
}

const data2 = {
  title: 'Card title 2',
  text: 'Card 2',
}

const data3 = {
  title: 'Card title 3',
  text: 'Card 3',
}

const Main = () => (
  <main>
    <Container>

      <Button>Main button</Button>

      <Button color="secondary">Secondary button</Button>
      <Button color="red">Red button</Button>
      <Button color="purple">Purple button</Button>
      <Button color="orange">Orange button</Button>

      text
      <h1>
        Main title
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, praesentium.
      </p>
      <Card text={data1.text} title={data1.title} />
      <Card text={data2.text} title={data2.title} />
      <Card text={data3.text} title={data3.title} />
    </Container>
  </main>
)


export default Main;