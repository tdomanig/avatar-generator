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
    <Head Background-Color="red"/>
    <Body/>
    <Foot/>
    </div>
    );
  };