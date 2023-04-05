export type CardProps = {
    data: {
        id: number,
    title: string,
      price: number,
      description: string,
      category: string,
      image: string,
      style: string
      rating:{
        rate: number,
        count:number
      }
    }
}