import Hypergraph from "../src/renderer/src/Hypergraph.js";

import { expect, test } from "vitest";

// TODO: (maybe) we need a concept of increasing crawl depth for search as intwerwingle increases

test("search edges (isolated)", () => {
    const hyperedges = [
        ["A", "B", "C"],
        ["1", "2", "C"]
    ];

    const hypergraph = new Hypergraph({ interwingle: Hypergraph.INTERWINGLE.ISOLATED });
    hypergraph.addHyperedges(hyperedges);

    const data = hypergraph.searchGraphData([["A"]]);
    expect(data.nodes.length).toBe(3);
    expect(data.links.length).toBe(2);
});

test("multiple search edges (isolated)", () => {
    const hyperedges = [
        ["A", "B", "C"],
        ["1", "2", "C"]
    ];

    const hypergraph = new Hypergraph({ interwingle: Hypergraph.INTERWINGLE.ISOLATED });
    hypergraph.addHyperedges(hyperedges);

    const data = hypergraph.searchGraphData([["C"]]);
    expect(data.nodes.length).toBe(6);
    expect(data.links.length).toBe(4);
});

test("multiple search terms (isolated)", () => {
    const hyperedges = [
        ["A", "B", "C"],
        ["1", "2", "C"]
    ];

    const hypergraph = new Hypergraph({ interwingle: Hypergraph.INTERWINGLE.ISOLATED });
    hypergraph.addHyperedges(hyperedges);

    const data = hypergraph.searchGraphData([["A"], ["1"]]);
    expect(data.nodes.length).toBe(6);
    expect(data.links.length).toBe(4);
});

test("search edge (isolated)", () => {
    const hyperedges = [
        ["A", "B", "C"],
        ["1", "2", "C"]
    ];

    const hypergraph = new Hypergraph({ interwingle: Hypergraph.INTERWINGLE.ISOLATED });
    hypergraph.addHyperedges(hyperedges);

    const data = hypergraph.searchGraphData([["A", "B"]]);
    expect(data.nodes.length).toBe(3);
    expect(data.links.length).toBe(2);
});

test("search edge no results (isolated)", () => {
    const hyperedges = [
        ["A", "B", "C"],
        ["1", "2", "3"]
    ];

    const hypergraph = new Hypergraph({ interwingle: Hypergraph.INTERWINGLE.ISOLATED });
    hypergraph.addHyperedges(hyperedges);

    const data = hypergraph.searchGraphData([["A", "C"]]);
    expect(data.nodes.length).toBe(0);
    expect(data.links.length).toBe(0);
});

test("search edge multiple results (isolated)", () => {
    const hyperedges = [
        ["A", "B", "C"],
        ["A", "B", "D"]
    ];

    const hypergraph = new Hypergraph({ interwingle: Hypergraph.INTERWINGLE.ISOLATED });
    hypergraph.addHyperedges(hyperedges);

    const data = hypergraph.searchGraphData([["A", "B"]]);
    expect(data.nodes.length).toBe(6);
    expect(data.links.length).toBe(4);
});

test("search edges (confluence)", () => {
    const hyperedges = [
        ["A", "B", "C"],
        ["1", "2", "C"]
    ];

    const hypergraph = new Hypergraph({ interwingle: Hypergraph.INTERWINGLE.CONFLUENCE });
    hypergraph.addHyperedges(hyperedges);

    const data = hypergraph.searchGraphData([["A"]]);
    expect(data.nodes.length).toBe(3);
    expect(data.links.length).toBe(2);
});

test("search edges (fusion)", () => {
    const hyperedges = [
        ["A", "B", "C"],
        ["1", "2", "C"]
    ];

    const hypergraph = new Hypergraph({ interwingle: Hypergraph.INTERWINGLE.FUSION });
    hypergraph.addHyperedges(hyperedges);

    const data = hypergraph.searchGraphData([["A"]]);
    expect(data.nodes.length).toBe(5);
    expect(data.links.length).toBe(4);
});

test("search edges (bridge)", () => {
    const hyperedges = [
        ["A", "B", "C"],
        ["1", "B", "D"]
    ];

    const hypergraph = new Hypergraph({ interwingle: Hypergraph.INTERWINGLE.BRIDGE });
    hypergraph.addHyperedges(hyperedges);

    const data = hypergraph.searchGraphData([["A"]]);
    expect(data.nodes.length).toBe(7);
    expect(data.links.length).toBe(6);
});

// TODO: crawl depth....do we want to bring in all bridge nodes or just bridge nodes that overlap more than X? where X is crawl depth?

/*
test.only("multiple search edges (confluence)", () => {
    const hyperedges = [
        ["A", "B", "C"],
        ["1", "2", "C"]
    ];

    const hypergraph = new Hypergraph({ interwingle: Hypergraph.INTERWINGLE.CONFLUENCE});
    hypergraph.addHyperedges(hyperedges);

    const data = hypergraph.searchGraphData(["C"]);
    expect(data.nodes.length).toBe(6);
    expect(data.links.length).toBe(4);
});
*/

// TODO:
// A B C
// 1 B C
// should be two conns right?
