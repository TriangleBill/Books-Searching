import React from 'react'
import Card from './Card'


export default function Results(): JSX.Element {
    return (
        <div className="wrapper mt-5 p-5">
            <h4 className="text-center mb-5">Found 446 results</h4>

            <div className="row">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
