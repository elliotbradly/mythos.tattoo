import React from 'react';

import Shade from "../../110.shade/99.core/state";
import * as Import from "../../110.shade/BEE";

import * as PIVOT from '../pivot'

interface Sim {
    hunt: (typ: string, obj?: any) => Promise<any>;
    state: State | null;
}

interface State {
    pivot: Sim;
    hunt: (typ: string, obj?: any) => Promise<any>;
    dispatch(action: { type: string; bale: any }): void;
}


export default function ShadeBlock() {
    console.log( PIVOT.SHADE + " block");

    let sim: Sim = {
        hunt: (typ, obj) => Promise.resolve({}),
        state: null,
    };

    sim.hunt = (typ: string, obj: any) => { return host(obj, typ); };

    var host = (obj: any, typ: string): Promise<any> => {
        init();

        var slv: (value: any) => void;
        const promo = new Promise<any>((rslv) => (slv = rslv));

        if (obj == null) obj = {};
        if (obj.slv == null) obj.slv = (val0: any) => slv(val0);

        sim.state!.dispatch({ type: typ, bale: obj });
        return promo;
    };

    var init = (): void => {
        if (sim.state != null) return;
        sim.state = new Shade();
        sim.state.pivot = sim;
        sim.state.hunt = sim.hunt;
        for (var k in Import.list) {
            new Import.list[k](sim.state);
        }
    };

    if (typeof window !== 'undefined' && (window as any)[  PIVOT.SHADE ] == null) {
        (window as any)[ PIVOT.SHADE ] = sim.hunt;
    }

    return (
        <></>
    );
}