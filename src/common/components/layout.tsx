import {Head} from './header'
import {Foot} from './footer'
import {Body} from './body'
import { FC, ReactNode } from 'react'
 
  

type LayoutProps={
    children:ReactNode
}
  export const Layout:FC<LayoutProps> = () => {
    return (
    <div>
    <Head />
    <Body/>
    <Foot/>
    </div>
    );
  };