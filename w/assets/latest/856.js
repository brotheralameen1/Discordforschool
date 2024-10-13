/*! For license information please see 856.js.LICENSE.txt */
(this.webpackChunkdiscord_marketing = this.webpackChunkdiscord_marketing || []).push([[856], {
    77974: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.GridActionType = void 0;
        t.default = function(e, t) {
            switch (t.type) {
            case n.ActionType.NAVIGATE_UP:
                return function(e, t) {
                    var r = i(0, e.focusedY - 1);
                    return o({}, e, {
                        focusedX: u(e.columnCounts[r] - 1, e.focusedX),
                        focusedY: r
                    })
                }(e);
            case n.ActionType.NAVIGATE_DOWN:
                return function(e, t) {
                    var r = u(e.focusedY + 1, e.columnCounts.length - 1);
                    return o({}, e, {
                        focusedX: u(e.columnCounts[r] - 1, e.focusedX),
                        focusedY: r
                    })
                }(e);
            case n.ActionType.NAVIGATE_RIGHT:
                return function(e, t) {
                    var r = e.focusedY === e.columnCounts.length - 1
                      , n = !r && e.focusedX + 1 === e.columnCounts[e.focusedY]
                      , a = n ? 0 : u(e.focusedX + 1, e.columnCounts[e.focusedY] - 1)
                      , i = n ? e.focusedY + 1 : e.focusedY;
                    return o({}, e, {
                        focusedX: a,
                        focusedY: i
                    })
                }(e);
            case n.ActionType.NAVIGATE_LEFT:
                return function(e, t) {
                    var r = 0 === e.focusedY
                      , n = !r && 0 === e.focusedX
                      , a = n ? e.focusedY - 1 : e.focusedY
                      , u = n ? e.columnCounts[a] - 1 : i(0, e.focusedX - 1);
                    return o({}, e, {
                        focusedX: u,
                        focusedY: a
                    })
                }(e);
            case n.ActionType.NAVIGATE_INLINE_START:
                return function(e, t) {
                    return o({}, e, {
                        focusedX: 0
                    })
                }(e);
            case n.ActionType.NAVIGATE_INLINE_END:
                return function(e, t) {
                    return o({}, e, {
                        focusedX: e.columnCounts[e.focusedY] - 1
                    })
                }(e);
            case n.ActionType.NAVIGATE_START:
                return function(e, t) {
                    return o({}, e, {
                        focusedX: 0,
                        focusedY: 0
                    })
                }(e);
            case n.ActionType.NAVIGATE_END:
                return function(e, t) {
                    var r = e.columnCounts.length - 1;
                    return o({}, e, {
                        focusedX: e.columnCounts[r] - 1,
                        focusedY: r
                    })
                }(e);
            case a.UPDATE_COLUMN_COUNTS:
                return function(e, t) {
                    var r = t.columnCounts
                      , n = u(i(0, r.length - 1), e.focusedY);
                    return o({}, e, {
                        columnCounts: r,
                        focusedX: u(null == r[n] ? 0 : r[n] - 1, e.focusedX),
                        focusedY: n
                    })
                }(e, t);
            case a.SET_FOCUSED_POSITION:
                return function(e, t) {
                    var r = t.x
                      , n = t.y
                      , a = i(0, u(n, e.columnCounts.length - 1));
                    return o({}, e, {
                        focusedX: i(0, u(r, e.columnCounts[a] - 1)),
                        focusedY: a
                    })
                }(e, t);
            case n.ActionType.SELECT_FOCUSED_ITEM:
                return e;
            default:
                console.warn("Grid navigator was given an unhandled action " + t.type)
            }
            return e
        }
        ;
        var n = r(60736);
        function o() {
            return o = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ,
            o.apply(null, arguments)
        }
        var a = t.GridActionType = function(e) {
            e.UPDATE_COLUMN_COUNTS = "UPDATE_COLUMN_COUNTS";
            e.SET_FOCUSED_POSITION = "SET_FOCUSED_POSITION";
            return e
        }({});
        function i(e, t) {
            return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.max(e, t)
        }
        function u(e, t) {
            return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.min(e, t)
        }
    }
    ,
    4538: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.ListActionType = void 0;
        t.default = function(e, t) {
            switch (t.type) {
            case n.ActionType.NAVIGATE_UP:
                return function(e, t) {
                    return o({}, e, {
                        focusedIndex: Math.max(0, e.focusedIndex - 1)
                    })
                }(e);
            case n.ActionType.NAVIGATE_DOWN:
                return function(e, t) {
                    return o({}, e, {
                        focusedIndex: Math.min(e.focusedIndex + 1, e.itemCount - 1)
                    })
                }(e);
            case n.ActionType.NAVIGATE_START:
                return function(e, t) {
                    return o({}, e, {
                        focusedIndex: 0
                    })
                }(e);
            case n.ActionType.NAVIGATE_END:
                return function(e, t) {
                    return o({}, e, {
                        focusedIndex: e.itemCount - 1
                    })
                }(e);
            case a.UPDATE_ITEM_COUNT:
                return function(e, t) {
                    var r = t.itemCount;
                    return o({}, e, {
                        itemCount: r,
                        focusedIndex: Math.min(r - 1, e.focusedIndex)
                    })
                }(e, t);
            case a.SET_FOCUSED_INDEX:
                return function(e, t) {
                    var r = t.index;
                    return o({}, e, {
                        focusedIndex: Math.max(0, Math.min(r, e.itemCount - 1))
                    })
                }(e, t);
            case n.ActionType.SELECT_FOCUSED_ITEM:
                return e;
            default:
                console.warn("Listbox navigator was given an unhandled action " + t.type)
            }
            return e
        }
        ;
        var n = r(60736);
        function o() {
            return o = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ,
            o.apply(null, arguments)
        }
        var a = t.ListActionType = function(e) {
            e.UPDATE_ITEM_COUNT = "UPDATE_ITEM_COUNT";
            e.SET_FOCUSED_INDEX = "SET_FOCUSED_INDEX";
            return e
        }({})
    }
    ,
    69314: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.MenuActionType = void 0;
        t.default = function(e, t) {
            switch (t.type) {
            case n.ActionType.NAVIGATE_UP:
                return function(e, t) {
                    var r = s(e)
                      , n = l(e);
                    if (null == n)
                        return e;
                    var a = (c(n, r) - 1) % n.length;
                    a < 0 && (a = n.length - 1);
                    if (null == n[a])
                        return e;
                    var u = i({}, e, {
                        focusPath: [].concat(o(e.focusPath.slice(0, -1)), [n[a].key])
                    });
                    return i({}, u, {
                        focusIndex: d(u)
                    })
                }(e);
            case n.ActionType.NAVIGATE_DOWN:
                return function(e, t) {
                    var r = s(e)
                      , n = l(e);
                    if (null == n)
                        return e;
                    var a = (c(n, r) + 1) % n.length;
                    if (null == n[a])
                        return e;
                    var u = i({}, e, {
                        focusPath: [].concat(o(e.focusPath.slice(0, -1)), [n[a].key])
                    });
                    return i({}, u, {
                        focusIndex: d(u)
                    })
                }(e);
            case n.ActionType.NAVIGATE_IN:
                return function(e, t) {
                    var r, n = s(e), a = l(e);
                    if (null == a)
                        return e;
                    var u = a[c(a, n)]
                      , f = null == u || null === (r = u.children) || void 0 === r ? void 0 : r[0];
                    if (null == f)
                        return e;
                    var p = i({}, e, {
                        focusPath: [].concat(o(e.focusPath), [f.key])
                    });
                    return i({}, p, {
                        focusIndex: d(p)
                    })
                }(e);
            case n.ActionType.NAVIGATE_OUT:
                return function(e, t) {
                    if (e.focusPath.length <= 1)
                        return e;
                    var r = i({}, e, {
                        focusPath: e.focusPath.slice(0, -1)
                    });
                    return i({}, r, {
                        focusIndex: d(r)
                    })
                }(e);
            case u.UPDATE_ITEMS:
                return function(e, t) {
                    var r = t.items
                      , n = i({}, e, {
                        items: r,
                        focusPath: f(r, e.focusPath)
                    });
                    return i({}, n, {
                        focusIndex: d(n)
                    })
                }(e, t);
            case u.SET_FOCUS_PATH:
                return function(e, t) {
                    var r = t.path
                      , n = i({}, e, {
                        focusPath: f(e.items, r)
                    });
                    return i({}, n, {
                        focusIndex: d(n)
                    })
                }(e, t);
            case n.ActionType.SELECT_FOCUSED_ITEM:
                return e;
            default:
                throw new Error("Menu navigator was given an unhandled action " + t.type)
            }
            return e
        }
        ;
        var n = r(60736);
        function o(e) {
            return function(e) {
                if (Array.isArray(e))
                    return a(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return a(e, t);
                    var r = {}.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? a(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function i() {
            return i = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ,
            i.apply(null, arguments)
        }
        var u = t.MenuActionType = function(e) {
            e.UPDATE_ITEMS = "UPDATE_ITEMS";
            e.SET_FOCUS_PATH = "SET_FOCUS_PATH";
            return e
        }({});
        function c(e, t) {
            return e.findIndex((function(e) {
                return t === e.key
            }
            ))
        }
        function s(e) {
            return e.focusPath[e.focusPath.length - 1]
        }
        function l(e) {
            for (var t = e.items, r = 0; r < e.focusPath.length - 1; r++) {
                if (null == t)
                    return;
                t = t[c(t, e.focusPath[r])].children
            }
            return t
        }
        function f(e, t) {
            for (var r = e, n = [], o = 0; o < t.length && null != r; o++) {
                var a = t[o]
                  , i = c(r, a);
                if (i < 0 || i >= r.length) {
                    var u = r[0];
                    null != u && n.push(u.key);
                    break
                }
                n.push(a);
                r = r[i].children
            }
            return n
        }
        function d(e) {
            var t = s(e)
              , r = l(e);
            return null == r ? -1 : c(r, t)
        }
    }
    ,
    48904: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.SparseListActionType = void 0;
        t.default = function(e, t) {
            switch (t.type) {
            case o.ActionType.NAVIGATE_UP:
                return function(e, t) {
                    for (var r = e.items, n = e.focusedIndex, o = -1, i = n - 1; i > 0; i--)
                        if (void 0 !== r[i]) {
                            o = i;
                            break
                        }
                    return a({}, e, {
                        focusedIndex: Math.max(0, o)
                    })
                }(e);
            case o.ActionType.NAVIGATE_DOWN:
                return function(e, t) {
                    for (var r = e.items, n = e.itemCount, o = e.focusedIndex, i = 1 / 0, u = o + 1; u < n - 1; u++)
                        if (void 0 !== r[u]) {
                            i = u;
                            break
                        }
                    return a({}, e, {
                        focusedIndex: Math.min(i, n - 1)
                    })
                }(e);
            case o.ActionType.NAVIGATE_START:
                return function(e, t) {
                    for (var r = e.items, n = e.itemCount, o = 0, i = 0; i < n; i++)
                        if (void 0 !== r[i]) {
                            o = i;
                            break
                        }
                    return a({}, e, {
                        focusedIndex: o
                    })
                }(e);
            case o.ActionType.NAVIGATE_END:
                return function(e, t) {
                    for (var r = e.items, n = e.itemCount, o = n, i = n - 1; i > 0; i--)
                        if (void 0 !== r[i]) {
                            o = i;
                            break
                        }
                    return a({}, e, {
                        focusedIndex: o
                    })
                }(e);
            case i.UPDATE_ITEMS:
                return function(e, t) {
                    var r = t.items
                      , n = r.length
                      , o = e.items[e.focusedIndex]
                      , i = r.indexOf(o);
                    return a({}, e, {
                        itemCount: n,
                        items: r,
                        focusedIndex: -1 === i ? Math.min(e.focusedIndex, n) : i
                    })
                }(e, t);
            case n.ListActionType.SET_FOCUSED_INDEX:
                return function(e, t) {
                    var r = t.index;
                    return a({}, e, {
                        focusedIndex: Math.max(0, Math.min(r, e.itemCount - 1))
                    })
                }(e, t);
            case o.ActionType.SELECT_FOCUSED_ITEM:
                return e;
            default:
                console.warn("SparseListReducer was given an unhandled action " + t.type)
            }
            return e
        }
        ;
        var n = r(4538)
          , o = r(60736);
        function a() {
            return a = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ,
            a.apply(null, arguments)
        }
        var i = t.SparseListActionType = function(e) {
            e.UPDATE_ITEMS = "UPDATE_ITEMS";
            return e
        }({})
    }
    ,
    48122: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.TreeNavigatorStore = t.TreeActionType = void 0;
        t.default = function(e, t) {
            switch (t.type) {
            case n.ActionType.NAVIGATE_UP:
                return function(e, t) {
                    return a({}, e, {
                        focusedIndex: Math.max(0, e.focusedIndex - 1)
                    })
                }(e);
            case n.ActionType.NAVIGATE_DOWN:
                return function(e, t) {
                    return a({}, e, {
                        focusedIndex: Math.min(e.visibleNodeList.length - 1, e.focusedIndex + 1)
                    })
                }(e);
            case n.ActionType.NAVIGATE_START:
                return function(e, t) {
                    return a({}, e, {
                        focusedIndex: 0
                    })
                }(e);
            case n.ActionType.NAVIGATE_END:
                return function(e, t) {
                    return a({}, e, {
                        focusedIndex: Math.max(0, e.visibleNodeList.length - 1)
                    })
                }(e);
            case n.ActionType.NAVIGATE_LEFT:
                return function(e, t) {
                    var r = c(e);
                    if (null == r)
                        return e;
                    if (r.expanded)
                        return l(e, r.id, a({}, r, {
                            expanded: !1
                        }));
                    if (null != r.parent) {
                        var n;
                        return a({}, e, {
                            focusedIndex: null !== (n = s(e, r.parent)) && void 0 !== n ? n : 0
                        })
                    }
                    return e
                }(e);
            case n.ActionType.NAVIGATE_RIGHT:
                return function(e, t) {
                    var r = c(e);
                    if (null == r)
                        return e;
                    var n = r.children.length > 0;
                    if (n && !r.expanded)
                        return l(e, r.id, a({}, r, {
                            expanded: !0
                        }));
                    if (n && r.expanded) {
                        var o;
                        return a({}, e, {
                            focusedIndex: null !== (o = s(e, r.children[0])) && void 0 !== o ? o : 0
                        })
                    }
                    return e
                }(e);
            case i.UPDATE_NODE:
                return function(e, t) {
                    var r = t.node;
                    return l(e, r.id, r)
                }(e, t);
            case i.UPDATE_NODES:
                return function(e, t) {
                    var r = t.newNodes
                      , n = t.rootIds;
                    return function(e, t, r) {
                        var n, o = c(e), i = a({}, e, {
                            nodes: t,
                            rootIds: r
                        });
                        i.visibleNodeList = d(i);
                        return a({}, i, {
                            focusedIndex: null != o && null !== (n = s(i, o.id)) && void 0 !== n ? n : 0
                        })
                    }(e, r, n)
                }(e, t);
            case i.REMOVE_NODE:
                return function(e, t) {
                    var r = t.node
                      , n = e.nodes
                      , i = r.id
                      , u = (n[i],
                    function(e, t) {
                        if (null == e)
                            return {};
                        var r = {};
                        for (var n in e)
                            if ({}.hasOwnProperty.call(e, n)) {
                                if (t.includes(n))
                                    continue;
                                r[n] = e[n]
                            }
                        return r
                    }(n, [i].map(o)));
                    return a({}, e, {
                        nodes: u,
                        visibleNodeList: d(e),
                        focusedIndex: Math.min(e.visibleNodeList.length - 1, e.focusedIndex)
                    })
                }(e, t);
            case i.SET_FOCUSED_NODE:
                return function(e, t) {
                    var r, n = t.nodeId, o = null !== (r = s(e, n)) && void 0 !== r ? r : 0;
                    return a({}, e, {
                        focusedIndex: o
                    })
                }(e, t);
            case n.ActionType.SELECT_FOCUSED_ITEM:
                return e;
            default:
                console.warn("Tree navigator was given an unhandled action " + t.type)
            }
            return e
        }
        ;
        t.treeReducerInitializer = function(e, t) {
            var r = {
                nodes: e,
                rootIds: t,
                visibleNodeList: [],
                focusedIndex: 0
            };
            r.visibleNodeList = d(r);
            return r
        }
        ;
        var n = r(60736);
        function o(e) {
            var t = function(e, t) {
                if ("object" != typeof e || !e)
                    return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, t || "default");
                    if ("object" != typeof n)
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" == typeof t ? t : t + ""
        }
        function a() {
            return a = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ,
            a.apply(null, arguments)
        }
        var i = t.TreeActionType = function(e) {
            e.UPDATE_NODE = "UPDATE_NODE";
            e.UPDATE_NODES = "UPDATE_NODES";
            e.REMOVE_NODE = "REMOVE_NODE";
            e.SET_FOCUSED_NODE = "SET_FOCUSED_NODE";
            return e
        }({});
        function u(e, t) {
            return e.nodes[t]
        }
        function c(e) {
            return u(e, e.visibleNodeList[e.focusedIndex])
        }
        function s(e, t) {
            if (null != t) {
                var r = e.visibleNodeList.indexOf(t);
                return -1 === r ? void 0 : r
            }
        }
        function l(e, t, r) {
            var n, o, i = c(e), u = a({}, e, {
                nodes: a({}, e.nodes, (n = {},
                n[t] = r,
                n))
            });
            u.visibleNodeList = d(u);
            return a({}, u, {
                focusedIndex: null != i && null !== (o = s(u, i.id)) && void 0 !== o ? o : 0
            })
        }
        function f(e, t) {
            if (null == t)
                return [];
            var r = u(e, t);
            if (null == r)
                return [];
            if (!r.expanded || 0 === r.children.length)
                return [t];
            var n = [t];
            r.children.forEach((function(t) {
                var r = f(e, t);
                Array.prototype.push.apply(n, r)
            }
            ));
            return n
        }
        function d(e) {
            var t = [];
            e.rootIds.forEach((function(r) {
                Array.prototype.push.apply(t, f(e, r))
            }
            ));
            return t
        }
        t.TreeNavigatorStore = function() {
            function e(e) {
                this.state = e
            }
            var t = e.prototype;
            t._updateState = function(e) {
                this.state = e
            }
            ;
            t.getNodes = function() {
                return this.state.nodes
            }
            ;
            t.getNode = function(e) {
                return u(this.state, e)
            }
            ;
            t.getVisibleNodeIndex = function(e) {
                return s(this.state, e)
            }
            ;
            t.getVisibleNodeCount = function() {
                return this.state.visibleNodeList.length
            }
            ;
            t.getFocusedIndex = function() {
                return this.state.focusedIndex
            }
            ;
            t.getFocusedNode = function() {
                return c(this.state)
            }
            ;
            t.isHighlighted = function(e) {
                var t = this.getFocusedNode();
                return null != t && t.id === e
            }
            ;
            return e
        }()
    }
    ,
    60736: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.Orientations = t.Keys = t.ActionType = void 0;
        t.ActionType = function(e) {
            e.NAVIGATE_UP = "NAVIGATE_UP";
            e.NAVIGATE_DOWN = "NAVIGATE_DOWN";
            e.NAVIGATE_LEFT = "NAVIGATE_LEFT";
            e.NAVIGATE_RIGHT = "NAVIGATE_RIGHT";
            e.NAVIGATE_START = "NAVIGATE_START";
            e.NAVIGATE_END = "NAVIGATE_END";
            e.NAVIGATE_INLINE_START = "NAVIGATE_INLINE_START";
            e.NAVIGATE_INLINE_END = "NAVIGATE_INLINE_END";
            e.NAVIGATE_CROSSLINE_START = "NAVIGATE_CROSSLINE_START";
            e.NAVIGATE_CROSSLINE_END = "NAVIGATE_CROSSLINE_END";
            e.NAVIGATE_NEXT_INTERACTABLE = "NAVIGATE_NEXT_INTERACTABLE";
            e.NAVIGATE_PREV_INTERACTABLE = "NAVIGATE_PREV_INTERACTABLE";
            e.NAVIGATE_IN = "NAVIGATE_IN";
            e.NAVIGATE_OUT = "NAVIGATE_OUT";
            e.SELECT_FOCUSED_ITEM = "SELECT_FOCUSED_ITEM";
            e.QUERY_START = "QUERY_START";
            e.QUERY_CLEAR = "QUERY_CLEAR";
            return e
        }({}),
        t.Keys = function(e) {
            e.ENTER = "Enter";
            e.SPACE = " ";
            e.ESCAPE = "Escape";
            e.TAB = "Tab";
            e.F10 = "F10";
            e.HOME = "Home";
            e.END = "End";
            e.UP = "ArrowUp";
            e.DOWN = "ArrowDown";
            e.LEFT = "ArrowLeft";
            e.RIGHT = "ArrowRight";
            e.PAGE_UP = "PageUp";
            e.PAGE_DOWN = "PageDown";
            return e
        }({}),
        t.Orientations = function(e) {
            e.HORIZONTAL = "horizontal";
            e.VERTICAL = "vertical";
            return e
        }({})
    }
    ,
    54397: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.LIST_ITEM_ID_ATTRIBUTE = t.LIST_ID_ATTRIBUTE = t.HandlerMemoizer = void 0;
        t.createListItemId = function(e, t) {
            return "" + e + n + t
        }
        ;
        t.createSelector = function(e, t) {
            void 0 === t && (t = r);
            return "[" + t + '="' + e + '"]'
        }
        ;
        t.getItemId = function(e) {
            return e.split(n)[1]
        }
        ;
        t.makeGridId = function(e, t, r) {
            return e + "-" + t + "-" + r
        }
        ;
        t.makeId = function(e, t) {
            return e + "-" + t
        }
        ;
        t.setRef = function(e, t) {
            "function" == typeof e ? e(t) : e.current = t
        }
        ;
        t.throttle = function(e, t) {
            var r = !1;
            return function() {
                if (!r) {
                    e.apply(void 0, arguments);
                    r = !0;
                    setTimeout((function() {
                        return r = !1
                    }
                    ), t)
                }
            }
        }
        ;
        var r = t.LIST_ITEM_ID_ATTRIBUTE = "data-list-item-id"
          , n = (t.LIST_ID_ATTRIBUTE = "data-list-id",
        "___");
        t.HandlerMemoizer = function() {
            function e(e) {
                this.handlers = new Map;
                this.makeHandler = e;
                this.makeHandler = e
            }
            var t = e.prototype;
            t.get = function(e) {
                var t = this.handlers.get(e);
                if (null == t) {
                    t = this.makeHandler(e);
                    this.handlers.set(e, t)
                }
                return t
            }
            ;
            t.clean = function() {
                delete this.handlers;
                this.handlers = new Map
            }
            ;
            return e
        }()
    }
    ,
    50389: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = {
            ActionType: !0,
            useGridNavigator: !0,
            useListNavigator: !0,
            useMenuNavigator: !0,
            useTreeNavigator: !0,
            Path: !0
        };
        Object.defineProperty(t, "ActionType", {
            enumerable: !0,
            get: function() {
                return o.ActionType
            }
        });
        Object.defineProperty(t, "Path", {
            enumerable: !0,
            get: function() {
                return s.Path
            }
        });
        Object.defineProperty(t, "useGridNavigator", {
            enumerable: !0,
            get: function() {
                return a.default
            }
        });
        Object.defineProperty(t, "useListNavigator", {
            enumerable: !0,
            get: function() {
                return i.default
            }
        });
        Object.defineProperty(t, "useMenuNavigator", {
            enumerable: !0,
            get: function() {
                return u.default
            }
        });
        Object.defineProperty(t, "useTreeNavigator", {
            enumerable: !0,
            get: function() {
                return c.default
            }
        });
        var o = r(60736)
          , a = f(r(18971));
        Object.keys(a).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === a[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return a[e]
                }
            }))
        }
        ));
        var i = f(r(5610));
        Object.keys(i).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === i[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return i[e]
                }
            }))
        }
        ));
        var u = f(r(56296));
        Object.keys(u).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === u[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return u[e]
                }
            }))
        }
        ));
        var c = f(r(36346));
        Object.keys(c).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === c[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return c[e]
                }
            }))
        }
        ));
        var s = r(69314);
        function l(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (l = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function f(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = l(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && {}.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
    }
    ,
    18971: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        Object.defineProperty(t, "GridActionType", {
            enumerable: !0,
            get: function() {
                return o.GridActionType
            }
        });
        t.default = function(e) {
            var t = e.navId
              , r = e.columnCounts
              , u = e.focusedX
              , c = void 0 === u ? 0 : u
              , E = e.focusedY
              , b = void 0 === E ? 0 : E
              , A = e.onSelect
              , O = e.prepareFocus
              , y = e.getNewFocusPosition
              , T = e.maintainFocusPosition
              , S = void 0 === T || T
              , v = e.enabled
              , h = void 0 === v || v
              , g = e.onDispatch
              , m = e.autoFocusElement
              , I = void 0 === m || m
              , N = e.useVirtualFocus
              , R = void 0 !== N && N
              , C = n.useCallback((function(e, t) {
                var r = (0,
                o.default)(e, t);
                null != g && g(e, r, t);
                return r
            }
            ), [g])
              , D = s(n.useReducer(C, {
                focusedX: c,
                focusedY: b,
                columnCounts: r
            }), 2)
              , P = D[0]
              , L = D[1]
              , w = P.columnCounts
              , M = P.focusedX
              , x = P.focusedY
              , k = s(n.useState((function() {
                return (0,
                i.throttle)(L, 16)
            }
            )), 1)[0];
            n.useEffect((function() {
                L({
                    type: o.GridActionType.UPDATE_COLUMN_COUNTS,
                    columnCounts: r
                })
            }
            ), [r]);
            return function(e) {
                var t = e.navId
                  , r = e.columnCounts
                  , u = e.focusedX
                  , c = e.focusedY
                  , E = e.onSelect
                  , b = e.prepareFocus
                  , A = e.getNewFocusPosition
                  , O = e.dispatch
                  , y = e.maintainFocusPosition
                  , T = e.enabled
                  , S = e.autoFocusElement
                  , v = e.useVirtualFocus
                  , h = n.useRef();
                h.current = T;
                var g = _(p(t, u, c))
                  , m = s(n.useState(!1), 2)
                  , I = m[0]
                  , N = m[1]
                  , R = s(n.useState(!1), 2)
                  , C = R[0]
                  , D = R[1]
                  , P = s(n.useState(!1), 2)
                  , L = P[0]
                  , w = P[1]
                  , M = n.useState((function() {
                    return new i.HandlerMemoizer((function(e) {
                        var t = s(e.split(",").map(Number), 2)
                          , r = t[0]
                          , n = t[1];
                        return function() {
                            N(!0);
                            O({
                                type: o.GridActionType.SET_FOCUSED_POSITION,
                                x: r,
                                y: n
                            })
                        }
                    }
                    ))
                }
                ))
                  , x = s(M, 1)[0];
                n.useEffect((function() {
                    return function() {
                        return x.clean()
                    }
                }
                ), [x]);
                var k = n.useCallback((function(e) {
                    if (!h.current || !S)
                        return !1;
                    e.focus()
                }
                ), [S])
                  , U = n.useCallback((function(e, r) {
                    var n = p(t, e, r);
                    (null != b ? b(e, r, n) : Promise.resolve()).then((function() {
                        var e = _(n);
                        if (null != e) {
                            k(e);
                            D(!1)
                        } else
                            requestAnimationFrame((function() {
                                return D(!0)
                            }
                            ))
                    }
                    ))
                }
                ), [t, b, k])
                  , j = n.useCallback((function(e) {
                    void 0 === e && (e = !0);
                    var r = s(null != A ? A(u, c) : [u, c], 2)
                      , n = r[0]
                      , a = r[1];
                    if (n !== u || a !== c) {
                        O({
                            type: o.GridActionType.SET_FOCUSED_POSITION,
                            x: n,
                            y: a
                        });
                        if (!e) {
                            w(!0);
                            return
                        }
                    }
                    var i = _(p(t, n, a));
                    if (null != i) {
                        w(!0);
                        k(i)
                    }
                }
                ), [O, u, c, A, t, k])
                  , G = s(n.useState(!1), 2)
                  , F = G[0]
                  , W = G[1];
                n.useEffect((function() {
                    if (F && I) {
                        W(!1);
                        var e = _(p(t, u, c));
                        if (null == e) {
                            N(!1);
                            var r = _(p(t));
                            null != r && k(r)
                        } else
                            k(e)
                    }
                }
                ), [t, F, I, k, u, c]);
                var B = n.useCallback((function(e) {
                    h.current && null == e && W(!0)
                }
                ), []);
                n.useEffect((function() {
                    if (I && C && null != g) {
                        k(g);
                        D(!1)
                    }
                }
                ), [C, g]);
                n.useEffect((function() {
                    if (I) {
                        L || U(u, c);
                        w(!1)
                    }
                }
                ), [u, c]);
                var V = n.useCallback((function(e) {
                    if (h.current)
                        if (v || !d.includes(e.key) || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey || e.currentTarget !== e.target) {
                            var t, n = function(e) {
                                switch (e.key) {
                                case a.Keys.ENTER:
                                    return a.ActionType.SELECT_FOCUSED_ITEM;
                                case a.Keys.UP:
                                    return a.ActionType.NAVIGATE_UP;
                                case a.Keys.DOWN:
                                    return a.ActionType.NAVIGATE_DOWN;
                                case a.Keys.RIGHT:
                                    return a.ActionType.NAVIGATE_RIGHT;
                                case a.Keys.LEFT:
                                    return a.ActionType.NAVIGATE_LEFT;
                                case a.Keys.HOME:
                                    return e.ctrlKey ? a.ActionType.NAVIGATE_START : a.ActionType.NAVIGATE_INLINE_START;
                                case a.Keys.END:
                                    return e.ctrlKey ? a.ActionType.NAVIGATE_END : a.ActionType.NAVIGATE_INLINE_END
                                }
                                return
                            }(e);
                            switch (n) {
                            case a.ActionType.NAVIGATE_UP:
                            case a.ActionType.NAVIGATE_DOWN:
                            case a.ActionType.NAVIGATE_RIGHT:
                            case a.ActionType.NAVIGATE_LEFT:
                            case a.ActionType.NAVIGATE_INLINE_START:
                            case a.ActionType.NAVIGATE_INLINE_END:
                            case a.ActionType.NAVIGATE_START:
                            case a.ActionType.NAVIGATE_END:
                                if (!(0 === r.length || 0 === u && 0 === c && n === a.ActionType.NAVIGATE_LEFT)) {
                                    e.preventDefault();
                                    e.stopPropagation()
                                }
                                O({
                                    type: n
                                });
                                return;
                            case a.ActionType.SELECT_FOCUSED_ITEM:
                                if (S && !(t = g,
                                (null == t ? void 0 : t.ownerDocument.activeElement) === t))
                                    return;
                                if (e.repeat)
                                    return;
                                e.preventDefault();
                                e.stopPropagation();
                                O({
                                    type: n
                                });
                                null != E ? E(u, c, e) : null != g && g.click()
                            }
                        } else {
                            e.preventDefault();
                            e.stopPropagation();
                            j()
                        }
                }
                ), [j, O, S, g, E, u, c])
                  , H = n.useCallback((function(e) {
                    if (e.currentTarget !== e.target) {
                        if (!I) {
                            N(!0);
                            w(!0)
                        }
                        return !1
                    }
                    if (I) {
                        j(!1);
                        return !1
                    }
                    y && null != g ? U(u, c) : j(!0)
                }
                ), [I, y, g, j, U, u, c])
                  , K = n.useCallback((function(e) {
                    if (e.target !== e.currentTarget) {
                        if (e.currentTarget.contains(e.relatedTarget))
                            return !1;
                        N(!1)
                    }
                }
                ), [])
                  , Y = n.useMemo((function() {
                    return Math.max.apply(Math, function(e) {
                        if (Array.isArray(e))
                            return f(e)
                    }(e = r) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                            return Array.from(e)
                    }(e) || l(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }());
                    var e
                }
                ), [r])
                  , X = n.useCallback((function() {
                    return {
                        role: "grid",
                        "aria-rowcount": r.length,
                        "aria-colcount": Y,
                        tabIndex: I && y ? -1 : 0,
                        "data-ref-id": t,
                        onKeyDown: V,
                        onFocus: H,
                        onBlur: K
                    }
                }
                ), [r.length, Y, I, y, t, V, H, K])
                  , J = n.useCallback((function(e, r) {
                    var n = {
                        role: "gridcell",
                        "aria-rowindex": r + 1,
                        "aria-colindex": e + 1,
                        id: (0,
                        i.makeGridId)(t, e, r),
                        tabIndex: y && e === u && r === c ? 0 : -1,
                        onFocus: x.get(e + "," + r)
                    };
                    e === u && r === c && (n.ref = B);
                    return n
                }
                ), [t, y, u, c, x, B])
                  , z = n.useCallback((function(e) {
                    return {
                        role: "row",
                        "aria-rowindex": e + 1
                    }
                }
                ), [])
                  , Q = n.useMemo((function() {
                    return {
                        dispatch: O,
                        getContainerProps: X,
                        getItemProps: J,
                        getRowProps: z
                    }
                }
                ), [O, X, J, z]);
                return Q
            }({
                navId: t,
                columnCounts: w,
                focusedX: M,
                focusedY: x,
                dispatch: k,
                onSelect: A,
                prepareFocus: O,
                getNewFocusPosition: y,
                maintainFocusPosition: S,
                enabled: h,
                autoFocusElement: I,
                useVirtualFocus: R
            })
        }
        ;
        var n = c(r(70079))
          , o = c(r(77974))
          , a = r(60736)
          , i = r(54397);
        function u(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (u = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function c(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = u(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && {}.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        function s(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, o, a, i, u = [], c = !0, s = !1;
                    try {
                        if (a = (r = r.call(e)).next,
                        0 === t) {
                            if (Object(r) !== r)
                                return;
                            c = !1
                        } else
                            for (; !(c = (n = a.call(r)).done) && (u.push(n.value),
                            u.length !== t); c = !0)
                                ;
                    } catch (e) {
                        s = !0,
                        o = e
                    } finally {
                        try {
                            if (!c && null != r.return && (i = r.return(),
                            Object(i) !== i))
                                return
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return u
                }
            }(e, t) || l(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function l(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return f(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? f(e, t) : void 0
            }
        }
        function f(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        var d = [a.Keys.TAB];
        function p(e, t, r) {
            return null != t && null != r ? "#" + (0,
            i.makeGridId)(e, t, r) : "[data-ref-id=" + e + "]"
        }
        function _(e) {
            return document.querySelector(e)
        }
    }
    ,
    5610: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        Object.defineProperty(t, "ListAction", {
            enumerable: !0,
            get: function() {
                return o.ListAction
            }
        });
        Object.defineProperty(t, "ListActionType", {
            enumerable: !0,
            get: function() {
                return o.ListActionType
            }
        });
        Object.defineProperty(t, "SparseListAction", {
            enumerable: !0,
            get: function() {
                return a.SparseListAction
            }
        });
        Object.defineProperty(t, "SparseListState", {
            enumerable: !0,
            get: function() {
                return a.SparseListState
            }
        });
        t.default = function(e) {
            var t = e.navId
              , r = e.itemCount
              , a = e.focusedIndex
              , i = void 0 === a ? 0 : a
              , c = e.onSelect
              , s = e.setFocus
              , f = e.getNewFocusIndex
              , d = e.maintainFocusPosition
              , p = void 0 === d || d
              , _ = e.includeSetSizes
              , E = void 0 === _ || _
              , A = e.focusOnMount
              , O = void 0 === A || A
              , y = e.enabled
              , T = void 0 === y || y
              , S = e.onDispatch
              , v = n.useCallback((function(e, t) {
                var r = (0,
                o.default)(e, t);
                null != S && S(e, r, t);
                return r
            }
            ), [S])
              , h = l(n.useReducer(v, {
                focusedIndex: i,
                itemCount: r
            }), 2)
              , g = h[0]
              , m = h[1]
              , I = g.itemCount
              , N = g.focusedIndex
              , R = l(n.useState((function() {
                return (0,
                u.throttle)(m, 16)
            }
            )), 1)[0];
            n.useEffect((function() {
                m({
                    type: o.ListActionType.UPDATE_ITEM_COUNT,
                    itemCount: r
                })
            }
            ), [r]);
            return b({
                navId: t,
                itemCount: I,
                focusedIndex: N,
                dispatch: R,
                onSelect: c,
                setFocus: s,
                getNewFocusIndex: f,
                maintainFocusPosition: p,
                includeSetSizes: E,
                focusOnMount: O,
                enabled: T
            })
        }
        ;
        t.useSparseListNavigator = function(e) {
            var t = e.navId
              , r = e.items
              , o = e.focusedIndex
              , i = void 0 === o ? 0 : o
              , c = e.onSelect
              , s = e.setFocus
              , f = e.getNewFocusIndex
              , d = e.maintainFocusPosition
              , p = void 0 === d || d
              , _ = e.includeSetSizes
              , E = void 0 === _ || _
              , A = e.focusOnMount
              , O = void 0 === A || A
              , y = e.enabled
              , T = void 0 === y || y
              , S = e.onDispatch
              , v = e.makeId
              , h = e.getIndexFromId
              , g = n.useCallback((function(e, t) {
                var r = (0,
                a.default)(e, t);
                null != S && S(e, r, t);
                return r
            }
            ), [S])
              , m = l(n.useReducer(g, {
                focusedIndex: i,
                itemCount: r.length,
                items: r
            }), 2)
              , I = m[0]
              , N = m[1]
              , R = I.itemCount
              , C = I.focusedIndex
              , D = l(n.useState((function() {
                return (0,
                u.throttle)(N, 16)
            }
            )), 1)[0];
            n.useEffect((function() {
                N({
                    type: a.SparseListActionType.UPDATE_ITEMS,
                    items: r
                })
            }
            ), [r]);
            return b({
                navId: t,
                itemCount: R,
                focusedIndex: C,
                dispatch: D,
                onSelect: c,
                setFocus: s,
                getNewFocusIndex: f,
                maintainFocusPosition: p,
                includeSetSizes: E,
                focusOnMount: O,
                enabled: T,
                makeId: v,
                getIndexFromId: h
            })
        }
        ;
        var n = s(r(70079))
          , o = s(r(4538))
          , a = s(r(48904))
          , i = r(60736)
          , u = r(54397);
        function c(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (c = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function s(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = c(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && {}.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        function l(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, o, a, i, u = [], c = !0, s = !1;
                    try {
                        if (a = (r = r.call(e)).next,
                        0 === t) {
                            if (Object(r) !== r)
                                return;
                            c = !1
                        } else
                            for (; !(c = (n = a.call(r)).done) && (u.push(n.value),
                            u.length !== t); c = !0)
                                ;
                    } catch (e) {
                        s = !0,
                        o = e
                    } finally {
                        try {
                            if (!c && null != r.return && (i = r.return(),
                            Object(i) !== i))
                                return
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return u
                }
            }(e, t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return f(e, t);
                    var r = {}.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? f(e, t) : void 0
                }
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function f(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        var d = [i.Keys.TAB, i.Keys.UP, i.Keys.DOWN];
        function p(e, t, r) {
            return null != r ? "#" + e(t, r) : "#" + t
        }
        function _(e) {
            return document.querySelector(e)
        }
        function E(e) {
            var t;
            null === (t = document.getElementById(e)) || void 0 === t || t.focus()
        }
        function b(e) {
            var t = e.navId
              , r = e.itemCount
              , a = e.focusedIndex
              , c = e.onSelect
              , s = e.setFocus
              , f = void 0 === s ? E : s
              , b = e.getNewFocusIndex
              , A = e.dispatch
              , O = e.maintainFocusPosition
              , y = e.includeSetSizes
              , T = e.focusOnMount
              , S = e.enabled
              , v = e.makeId
              , h = void 0 === v ? u.makeId : v
              , g = e.getIndexFromId
              , m = n.useRef(r)
              , I = n.useRef(g);
            I.current = g;
            m.current = r;
            var N = n.useRef();
            n.useEffect((function() {
                N.current = S
            }
            ), [S]);
            var R = l(n.useState(!1), 2)
              , C = R[0]
              , D = R[1]
              , P = l(n.useState((function() {
                return new u.HandlerMemoizer((function(e) {
                    return function() {
                        var t = null != I.current && "string" == typeof e ? I.current(e) : e;
                        "number" != typeof t || t < 0 || A({
                            type: o.ListActionType.SET_FOCUSED_INDEX,
                            index: t
                        })
                    }
                }
                ))
            }
            )), 1)[0];
            n.useEffect((function() {
                return function() {
                    return P.clean()
                }
            }
            ), [P]);
            var L = n.useCallback((function(e, t) {
                N.current && f(e, t)
            }
            ), [f])
              , w = l(n.useState(!0), 2)
              , M = w[0]
              , x = w[1];
            n.useEffect((function() {
                !M || T ? L(h(t, a), a) : x(!1)
            }
            ), [a]);
            var k = n.useCallback((function(e) {
                void 0 === e && (e = !0);
                var r = null != b ? b(a) : a;
                r !== a && A({
                    type: o.ListActionType.SET_FOCUSED_INDEX,
                    index: r
                });
                e && L(h(t, r), r)
            }
            ), [h, a, b, A, t, L])
              , U = n.useCallback((function(e) {
                if (N.current)
                    if (!d.includes(e.key) || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey || e.currentTarget !== e.target) {
                        var r, n = function(e) {
                            switch (e.key) {
                            case i.Keys.ENTER:
                            case i.Keys.SPACE:
                                return i.ActionType.SELECT_FOCUSED_ITEM;
                            case i.Keys.UP:
                                return i.ActionType.NAVIGATE_UP;
                            case i.Keys.DOWN:
                                return i.ActionType.NAVIGATE_DOWN;
                            case i.Keys.HOME:
                                return i.ActionType.NAVIGATE_START;
                            case i.Keys.END:
                                return i.ActionType.NAVIGATE_END
                            }
                        }(e);
                        switch (n) {
                        case i.ActionType.NAVIGATE_UP:
                        case i.ActionType.NAVIGATE_DOWN:
                        case i.ActionType.NAVIGATE_START:
                        case i.ActionType.NAVIGATE_END:
                            e.preventDefault();
                            e.stopPropagation();
                            A({
                                type: n
                            });
                            return;
                        case i.ActionType.SELECT_FOCUSED_ITEM:
                            var o = _(p(h, t, a));
                            if (!(r = o,
                            (null == r ? void 0 : r.ownerDocument.activeElement) === r))
                                return;
                            if (e.repeat)
                                return;
                            e.preventDefault();
                            e.stopPropagation();
                            A({
                                type: n
                            });
                            if (null != c) {
                                c(a);
                                return
                            }
                            null == o || o.click()
                        }
                    } else {
                        e.preventDefault();
                        e.stopPropagation();
                        k()
                    }
            }
            ), [h, t, A, a, k, c])
              , j = n.useCallback((function() {
                !C && D(!0)
            }
            ), [C])
              , G = n.useCallback((function() {
                C || (O ? L(h(t, a), a) : k(!0))
            }
            ), [h, t, L, O, C, a, k])
              , F = n.useCallback((function(e) {
                e.currentTarget.contains(e.relatedTarget) || requestAnimationFrame((function() {
                    null != _(p(h, t, a)) ? D(!1) : L(t)
                }
                ))
            }
            ), [h, t, a, L])
              , W = n.useRef(null);
            n.useLayoutEffect((function() {
                var e = W.current;
                if (null != e) {
                    e.addEventListener("focusin", j);
                    e.addEventListener("focus", G);
                    e.addEventListener("focusout", F);
                    return function() {
                        e.removeEventListener("focusin", j);
                        e.removeEventListener("focus", G);
                        e.removeEventListener("focusout", F)
                    }
                }
            }
            ), [G, j, F]);
            var B = n.useCallback((function() {
                return {
                    role: "list",
                    tabIndex: C && O ? -1 : 0,
                    id: t,
                    onKeyDown: U,
                    ref: W
                }
            }
            ), [t, C, U, O])
              , V = n.useCallback((function(e) {
                var r = e.index;
                return {
                    role: "listitem",
                    "aria-setsize": y ? m.current : void 0,
                    "aria-posinset": y ? r + 1 : void 0,
                    id: h(t, r),
                    tabIndex: O && r === a ? 0 : -1,
                    onFocus: P.get(null != I.current ? h(t, r) : r)
                }
            }
            ), [h, t, a, O, P, y]);
            return n.useMemo((function() {
                return {
                    dispatch: A,
                    getContainerProps: B,
                    getItemProps: V
                }
            }
            ), [A, B, V])
        }
    }
    ,
    56296: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        Object.defineProperty(t, "MenuActionType", {
            enumerable: !0,
            get: function() {
                return o.MenuActionType
            }
        });
        Object.defineProperty(t, "MenuItem", {
            enumerable: !0,
            get: function() {
                return o.MenuItem
            }
        });
        t.default = function(e) {
            var t = e.navId
              , r = e.items
              , u = e.initialFocusPath
              , c = e.onSelect
              , f = e.enabled
              , p = void 0 === f || f
              , _ = e.closeMenu
              , E = n.useRef(p);
            n.useLayoutEffect((function() {
                E.current = p
            }
            ), [p]);
            var b = l(n.useReducer(o.default, {
                items: r,
                focusPath: u,
                focusIndex: -1
            }), 2)
              , A = b[0]
              , O = b[1]
              , y = n.useMemo((function() {
                return (0,
                i.throttle)(O, 30)
            }
            ), [O]);
            n.useEffect((function() {
                O({
                    type: o.MenuActionType.UPDATE_ITEMS,
                    items: r
                })
            }
            ), [r]);
            var T = A.focusPath
              , S = l(n.useState(!1), 2)
              , v = S[0]
              , h = S[1]
              , g = l(n.useState(!1), 2)
              , m = g[0]
              , I = g[1]
              , N = l(n.useState((function() {
                return {
                    onItemFocusMemoizer: new i.HandlerMemoizer((function(e) {
                        return function() {
                            h(!0);
                            O({
                                type: o.MenuActionType.SET_FOCUS_PATH,
                                path: e.split(d)
                            })
                        }
                    }
                    )),
                    onItemMouseEnterMemoizer: new i.HandlerMemoizer((function(e) {
                        return function() {
                            I(!1);
                            O({
                                type: o.MenuActionType.SET_FOCUS_PATH,
                                path: e.split(d)
                            })
                        }
                    }
                    ))
                }
            }
            )), 1)[0]
              , R = N.onItemFocusMemoizer
              , C = N.onItemMouseEnterMemoizer
              , D = n.useCallback((function(e) {
                var r;
                if (E.current) {
                    if (e.key === a.Keys.ESCAPE && null != _) {
                        e.stopPropagation();
                        e.preventDefault();
                        _()
                    }
                    var n, o, u = function(e) {
                        switch (e.key) {
                        case a.Keys.ENTER:
                        case a.Keys.SPACE:
                            return a.ActionType.SELECT_FOCUSED_ITEM;
                        case a.Keys.UP:
                            return a.ActionType.NAVIGATE_UP;
                        case a.Keys.DOWN:
                            return a.ActionType.NAVIGATE_DOWN;
                        case a.Keys.RIGHT:
                            return a.ActionType.NAVIGATE_IN;
                        case a.Keys.LEFT:
                            return a.ActionType.NAVIGATE_OUT
                        }
                        return
                    }(e);
                    switch (u) {
                    case a.ActionType.NAVIGATE_UP:
                    case a.ActionType.NAVIGATE_DOWN:
                    case a.ActionType.NAVIGATE_IN:
                    case a.ActionType.NAVIGATE_OUT:
                        e.preventDefault();
                        e.stopPropagation();
                        I(!0);
                        y({
                            type: u
                        });
                        return;
                    case a.ActionType.SELECT_FOCUSED_ITEM:
                        if (e.repeat)
                            return;
                        if (e.target.tabIndex >= 0)
                            return;
                        e.preventDefault();
                        e.stopPropagation();
                        I(!1);
                        y({
                            type: u
                        });
                        if (null != c) {
                            c(T);
                            return
                        }
                        var s = null !== (r = e.target.ownerDocument) && void 0 !== r ? r : document
                          , l = (n = s,
                        o = function(e, t) {
                            return null != t ? "" + (0,
                            i.makeId)(e, t.join(d)) : e
                        }(t, T),
                        n.getElementById(o));
                        null == l || l.click()
                    }
                }
            }
            ), [y, t, T, c, _])
              , P = n.useCallback((function() {
                v || h(!0)
            }
            ), [v])
              , L = n.useCallback((function(e) {
                if (e.target !== e.currentTarget) {
                    if (e.currentTarget.contains(e.relatedTarget))
                        return;
                    v && h(!1)
                }
            }
            ), [v])
              , w = n.useCallback((function() {
                O({
                    type: o.MenuActionType.SET_FOCUS_PATH,
                    path: []
                });
                h(!1)
            }
            ), [])
              , M = n.useCallback((function(e) {
                return e.every((function(e, t) {
                    return T[t] === e
                }
                ))
            }
            ), [T])
              , x = n.useCallback((function() {
                return {
                    role: "menu",
                    id: t,
                    tabIndex: -1,
                    onKeyDown: D,
                    onFocus: P,
                    onBlur: L,
                    onMouseLeave: w,
                    "aria-activedescendant": T.length > 0 ? (0,
                    i.makeId)(t, T.join(d)) : void 0
                }
            }
            ), [t, D, P, L, w, T])
              , k = n.useCallback((function(e) {
                var r = e.path;
                return {
                    role: "menu",
                    tabIndex: -1,
                    "aria-activedescendant": M(r) ? (0,
                    i.makeId)(t, T.join(d)) : void 0,
                    focusIndex: A.focusIndex,
                    isUsingKeyboardNavigation: m
                }
            }
            ), [t, T, M, A.focusIndex, m])
              , U = n.useCallback((function(e) {
                var r = e.path
                  , n = e.hasSubmenu
                  , o = void 0 !== n && n
                  , a = e.navigable
                  , u = void 0 === a || a
                  , c = e.role
                  , l = void 0 === c ? "menuitem" : c
                  , f = r.join(d);
                return s({}, o ? {
                    "aria-expanded": M(r),
                    "aria-haspopup": !0
                } : {}, {
                    role: l,
                    id: (0,
                    i.makeId)(t, f),
                    tabIndex: -1,
                    onFocus: u ? R.get(f) : function() {}
                    ,
                    onMouseEnter: u ? C.get(f) : function() {}
                })
            }
            ), [t, M, R, C]);
            return n.useMemo((function() {
                return {
                    dispatch: y,
                    getContainerProps: x,
                    getSubmenuProps: k,
                    getItemProps: U,
                    isFocused: M,
                    isUsingKeyboardNavigation: m
                }
            }
            ), [y, x, k, U, M, m])
        }
        ;
        var n = c(r(70079))
          , o = c(r(69314))
          , a = r(60736)
          , i = r(54397);
        function u(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (u = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function c(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = u(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && {}.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        function s() {
            return s = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ,
            s.apply(null, arguments)
        }
        function l(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, o, a, i, u = [], c = !0, s = !1;
                    try {
                        if (a = (r = r.call(e)).next,
                        0 === t) {
                            if (Object(r) !== r)
                                return;
                            c = !1
                        } else
                            for (; !(c = (n = a.call(r)).done) && (u.push(n.value),
                            u.length !== t); c = !0)
                                ;
                    } catch (e) {
                        s = !0,
                        o = e
                    } finally {
                        try {
                            if (!c && null != r.return && (i = r.return(),
                            Object(i) !== i))
                                return
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return u
                }
            }(e, t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return f(e, t);
                    var r = {}.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? f(e, t) : void 0
                }
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function f(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        var d = "--"
    }
    ,
    36346: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        Object.defineProperty(t, "TreeActionType", {
            enumerable: !0,
            get: function() {
                return o.TreeActionType
            }
        });
        Object.defineProperty(t, "TreeNode", {
            enumerable: !0,
            get: function() {
                return o.TreeNode
            }
        });
        t.default = function(e) {
            var t = e.nodes
              , r = e.rootIds
              , u = e.navId
              , c = e.enabled
              , l = void 0 === c || c
              , p = e.onSelect
              , _ = s(n.useReducer(o.default, void 0, (function() {
                return (0,
                o.treeReducerInitializer)(t, r)
            }
            )), 2)
              , E = _[0]
              , b = _[1]
              , A = s(n.useState((function() {
                return (0,
                i.throttle)(b, 16)
            }
            )), 1)[0]
              , O = s(n.useState((function() {
                return new o.TreeNavigatorStore(E)
            }
            )), 1)[0];
            O._updateState(E);
            var y = s(n.useState(!1), 2)
              , T = y[0]
              , S = y[1]
              , v = s(n.useState(!1), 2)
              , h = v[0]
              , g = v[1]
              , m = n.useRef();
            m.current = l;
            var I = O.getFocusedIndex()
              , N = O.getFocusedNode()
              , R = d(f(u, I))
              , C = s(n.useState((function() {
                return new i.HandlerMemoizer((function(e) {
                    return function() {
                        g(!0);
                        A({
                            type: o.TreeActionType.SET_FOCUSED_NODE,
                            nodeId: e
                        })
                    }
                }
                ))
            }
            )), 1)[0];
            n.useEffect((function() {
                return function() {
                    return C.clean()
                }
            }
            ), [C]);
            var D = n.useCallback((function(e) {
                if (!m.current)
                    return !1;
                e.ownerDocument.activeElement !== e && e.focus()
            }
            ), []);
            n.useEffect((function() {
                A({
                    type: o.TreeActionType.UPDATE_NODES,
                    newNodes: t,
                    rootIds: r
                })
            }
            ), [t, r, A]);
            n.useEffect((function() {
                if (h)
                    if (T)
                        S(!1);
                    else {
                        var e = d(f(u, I));
                        null != e && D(e)
                    }
            }
            ), [I]);
            var P = n.useCallback((function(e) {
                if (m.current) {
                    var t, r = function(e) {
                        switch (e.key) {
                        case a.Keys.ENTER:
                        case a.Keys.SPACE:
                            return a.ActionType.SELECT_FOCUSED_ITEM;
                        case a.Keys.UP:
                            return a.ActionType.NAVIGATE_UP;
                        case a.Keys.DOWN:
                            return a.ActionType.NAVIGATE_DOWN;
                        case a.Keys.LEFT:
                            return a.ActionType.NAVIGATE_LEFT;
                        case a.Keys.RIGHT:
                            return a.ActionType.NAVIGATE_RIGHT;
                        case a.Keys.HOME:
                            return a.ActionType.NAVIGATE_START;
                        case a.Keys.END:
                            return a.ActionType.NAVIGATE_END
                        }
                        return
                    }(e);
                    switch (r) {
                    case a.ActionType.NAVIGATE_UP:
                    case a.ActionType.NAVIGATE_DOWN:
                    case a.ActionType.NAVIGATE_LEFT:
                    case a.ActionType.NAVIGATE_RIGHT:
                    case a.ActionType.NAVIGATE_START:
                    case a.ActionType.NAVIGATE_END:
                        e.preventDefault();
                        e.stopPropagation();
                        A({
                            type: r
                        });
                        return;
                    case a.ActionType.SELECT_FOCUSED_ITEM:
                        if (!(t = R,
                        (null == t ? void 0 : t.ownerDocument.activeElement) === t))
                            return;
                        if (e.repeat)
                            return;
                        e.preventDefault();
                        e.stopPropagation();
                        A({
                            type: r
                        });
                        null != p ? null != N && p(N) : null != R && R.click()
                    }
                }
            }
            ), [A, N, R, p])
              , L = n.useCallback((function() {
                if (!h) {
                    g(!0);
                    S(!0)
                }
            }
            ), [h])
              , w = n.useCallback((function(e) {
                if (e.target !== e.currentTarget) {
                    if (e.currentTarget.contains(e.relatedTarget))
                        return !1;
                    h && g(!1)
                }
            }
            ), [h])
              , M = n.useCallback((function() {
                return {
                    role: "tree",
                    "data-ref-id": u,
                    tabIndex: -1,
                    onKeyDown: P,
                    onFocus: L,
                    onBlur: w
                }
            }
            ), [P, w, L, u])
              , x = n.useCallback((function(e) {
                var t, r = e.id, n = O.getNode(r), o = null !== (t = O.getVisibleNodeIndex(r)) && void 0 !== t ? t : -1, a = null != n && n.children.length > 0, c = {
                    role: "treeitem",
                    tabIndex: o === I ? 0 : -1,
                    "aria-setsize": O.getVisibleNodeCount(),
                    "aria-posinset": o + 1,
                    "data-ref-id": (0,
                    i.makeId)(u, o),
                    onFocus: C.get(r)
                };
                a && (c["aria-expanded"] = null != n && n.expanded);
                return c
            }
            ), [u, I, O, C]);
            return {
                store: O,
                dispatch: A,
                getContainerProps: M,
                getItemProps: x
            }
        }
        ;
        var n = c(r(70079))
          , o = c(r(48122))
          , a = r(60736)
          , i = r(54397);
        function u(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (u = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function c(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = u(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && {}.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        function s(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, o, a, i, u = [], c = !0, s = !1;
                    try {
                        if (a = (r = r.call(e)).next,
                        0 === t) {
                            if (Object(r) !== r)
                                return;
                            c = !1
                        } else
                            for (; !(c = (n = a.call(r)).done) && (u.push(n.value),
                            u.length !== t); c = !0)
                                ;
                    } catch (e) {
                        s = !0,
                        o = e
                    } finally {
                        try {
                            if (!c && null != r.return && (i = r.return(),
                            Object(i) !== i))
                                return
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return u
                }
            }(e, t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return l(e, t);
                    var r = {}.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? l(e, t) : void 0
                }
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function l(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function f(e, t) {
            return null != t ? "[data-ref-id=" + (0,
            i.makeId)(e, t) + "]" : "[data-ref-id=" + e + "]"
        }
        function d(e) {
            return document.querySelector(e)
        }
    }
    ,
    29978: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.IS_APP_COMPATIBLE_BROWSER = t.BROWSER_SUPPORTS_VOICE = t.BROWSER_SUPPORTS_VIDEO = t.BROWSER_SUPPORTS_UNIFIED_PLAN = t.BROWSER_SUPPORTS_DIAGNOSTICS = t.BROWSER_SUPPORTS_CONNECTION_STATE = void 0;
        var n, o, a = (n = r(64344)) && n.__esModule ? n : {
            default: n
        };
        var i = parseInt(null !== (o = a.default.version) && void 0 !== o ? o : "0", 10)
          , u = void 0 !== a.default.ua && a.default.ua.indexOf("OculusBrowser") > -1;
        t.IS_APP_COMPATIBLE_BROWSER = function() {
            if (null == window.WebSocket)
                return !1;
            switch (a.default.name) {
            case "IE":
            case "Microsoft Edge":
                return i >= 15;
            default:
                return !0
            }
        }(),
        t.BROWSER_SUPPORTS_VOICE = u || "Firefox" === a.default.name && i >= 80 || "Chrome" === a.default.name && i >= 37 || "Opera" === a.default.name && i >= 66 || "Node.js" === a.default.name && i >= 6 || "Electron" === a.default.name && i >= 1 || "Safari" === a.default.name && i >= 13 || "Microsoft Edge" === a.default.name && i >= 37,
        t.BROWSER_SUPPORTS_VIDEO = "Chrome" === a.default.name || "Safari" === a.default.name || "Firefox" === a.default.name && i >= 80 || "Opera" === a.default.name || "Microsoft Edge" === a.default.name,
        t.BROWSER_SUPPORTS_UNIFIED_PLAN = u || "Firefox" === a.default.name && i >= 73 || "Safari" === a.default.name && i >= 13 || "Chrome" === a.default.name && i >= 80 || "Microsoft Edge" === a.default.name && i >= 80,
        t.BROWSER_SUPPORTS_DIAGNOSTICS = "Chrome" === a.default.name && i >= 58 || "Safari" === a.default.name && i >= 15 || "Firefox" === a.default.name && i >= 108,
        t.BROWSER_SUPPORTS_CONNECTION_STATE = "Chrome" === a.default.name && i >= 72 || "Safari" === a.default.name && i >= 11 || "Opera" === a.default.name && i >= 60 || "Microsoft Edge" === a.default.name && i >= 79
    }
    ,
    46691: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.cssValueToNumber = function(e) {
            var t = parseInt(e, 10);
            return isNaN(t) ? 0 : t
        }
        ;
        t.getAcronym = function(e) {
            return null != e ? e.replace(/'s /g, " ").replace(/\w+/g, (function(e) {
                return e[0]
            }
            )).replace(/\s/g, "") : ""
        }
        ;
        t.truncateText = t.stripDiacritics = t.normalize = void 0;
        t.upperCaseFirstChar = function(e) {
            if (null == e)
                return "";
            return "" + e.charAt(0).toUpperCase() + e.slice(1)
        }
        ;
        function n(e) {
            return function(e) {
                if (Array.isArray(e))
                    return o(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return o(e, t);
                    var r = {}.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? o(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        var a = /[\u0300-\u036f]/g
          , i = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
        t.truncateText = function(e, t, r) {
            void 0 === r && (r = "…");
            if (null == e || null == t)
                return "";
            if (e.length > t) {
                return "" + (i.test(e) ? n(e).slice(0, t - r.length).join("") : e.substring(0, t - r.length)).replace(/[\s.]+$/, "") + r
            }
            return e
        }
        ;
        t.stripDiacritics = null == String.prototype.normalize ? function(e) {
            return e
        }
        : function(e) {
            return e.normalize("NFD").replace(a, "").normalize("NFC")
        }
        ;
        t.normalize = null == String.prototype.normalize ? function(e) {
            return e
        }
        : function(e) {
            var t = r(10228)
              , o = "";
            n(e.normalize("NFD")).forEach((function(e) {
                var r;
                o += null !== (r = t[e]) && void 0 !== r ? r : e
            }
            ));
            return o.normalize("NFD").toLocaleLowerCase()
        }
    }
    ,
    70074: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.getClass = function(e, t) {
            for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
                o[a - 2] = arguments[a];
            var i = o.reduce((function(e, t) {
                return e + (0,
                n.upperCaseFirstChar)(t)
            }
            ), "")
              , u = e["" + t + i];
            if (null == u) {
                0;
                return ""
            }
            return u
        }
        ;
        var n = r(46691)
    }
    ,
    13321: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.Videos = t.Sounds = t.Images = t.ImageMetaData = t.Games = t.CommunityAddons = t.Addons = void 0;
        var n = r(27048)
          , o = t.Images = {
            COMMON_WUMPUS_ERROR: r(96579),
            REBRAND_LANDING_REFRESH_BIG_GROUPS: r(27686),
            REBRAND_LANDING_REFRESH_HANGOUT: r(81351),
            REBRAND_LANDING_REFRESH_INVITE_ONLY: r(75111),
            REBRAND_LANDING_REFRESH_RELIABLE: r(30777),
            REFRESH_DOWNLOAD_WINDOWS: r(48522),
            REFRESH_DOWNLOAD_MAC: r(6193),
            REFRESH_DOWNLOAD_ANDROID: r(41941),
            REFRESH_DOWNLOAD_IOS: r(74969),
            REFRESH_DOWNLOAD_LINUX: r(22448),
            ICON_TWITTER: r(47628),
            ICON_HERO_GAME_CS: r(90023),
            ICON_HERO_GAME_DOTA2: r(48408),
            ICON_HERO_GAME_FFXIV: r(50321),
            ICON_HERO_GAME_LEAGUE: r(18834),
            ICON_HERO_GAME_MINECRAFT: r(76903),
            ICON_HERO_GAME_WOW: r(16903),
            ICON_ARROW_2: r(42059),
            ICON_INSTRUCTOR_ARROW: r(15685),
            ICON_CODE_LIGHT: r(39669),
            ICON_CODE_DARK: r(93472),
            ASSET_BG_CS: r(99966),
            ASSET_BG_DOTA2: r(21643),
            ASSET_BG_FFXIV: r(58199),
            ASSET_BG_LEAGUE: r(81976),
            ASSET_BG_MINECRAFT: r(19346),
            ASSET_BG_WOW: r(64433),
            ASSET_DEFAULT_AVATAR_0: r(98777),
            ASSET_DEFAULT_AVATAR_1: r(32154),
            ASSET_DEFAULT_AVATAR_2: r(91753),
            ASSET_DEFAULT_AVATAR_3: r(12142),
            ASSET_DEFAULT_AVATAR_4: r(4375),
            ASSET_DEFAULT_AVATAR_5: r(73765),
            ASSET_BG_DISCORD: r(86181),
            ASSET_HERO_GAME_CS: r(40624),
            ASSET_HERO_GAME_DOTA2: r(91908),
            ASSET_HERO_GAME_FFXIV: r(75722),
            ASSET_HERO_GAME_LEAGUE: r(93112),
            ASSET_HERO_GAME_MINECRAFT: r(44917),
            ASSET_HERO_GAME_WOW: r(20448),
            ASSET_HERO_GAME_DISCORD: r(47756),
            ASSET_PARTICLE_DISCORD_1: r(67262),
            ASSET_PARTICLE_DISCORD_2: r(4484),
            ASSET_PARTICLE_DISCORD_3: r(63498),
            ASSET_PARTICLE_DISCORD_4: r(13993),
            ASSET_PARTICLE_DISCORD_5: r(41039),
            ASSET_PARTICLE_DISCORD_6: r(53534),
            ASSET_PARTICLE_CS_1: r(16351),
            ASSET_PARTICLE_CS_2: r(54910),
            ASSET_PARTICLE_CS_3: r(29790),
            ASSET_PARTICLE_CS_4: r(73372),
            ASSET_PARTICLE_CS_5: r(88308),
            ASSET_PARTICLE_CS_6: r(52396),
            ASSET_PARTICLE_DOTA_1: r(93719),
            ASSET_PARTICLE_DOTA_2: r(96874),
            ASSET_PARTICLE_DOTA_3: r(77287),
            ASSET_PARTICLE_DOTA_4: r(17576),
            ASSET_PARTICLE_DOTA_5: r(96142),
            ASSET_PARTICLE_FFXIV_1: r(61228),
            ASSET_PARTICLE_FFXIV_2: r(25981),
            ASSET_PARTICLE_FFXIV_3: r(84899),
            ASSET_PARTICLE_FFXIV_4: r(21801),
            ASSET_PARTICLE_LOL_1: r(33314),
            ASSET_PARTICLE_LOL_2: r(36024),
            ASSET_PARTICLE_LOL_3: r(40011),
            ASSET_PARTICLE_LOL_4: r(96036),
            ASSET_PARTICLE_MC_1: r(48507),
            ASSET_PARTICLE_MC_2: r(83873),
            ASSET_PARTICLE_MC_3: r(50832),
            ASSET_PARTICLE_MC_4: r(78442),
            ASSET_PARTICLE_MC_5: r(29820),
            ASSET_PARTICLE_MC_6: r(44971),
            ASSET_PARTICLE_MC_7: r(49321),
            ASSET_PARTICLE_WOW_1: r(84999),
            ASSET_PARTICLE_WOW_2: r(62724),
            ASSET_PARTICLE_WOW_3: r(62973),
            ASSET_PARTICLE_WOW_4: r(59042),
            PARTNERS_PERK_BADGES: r(72932),
            PARTNERS_PERK_HOODIE: r(72048),
            PARTNERS_PERK_PREMIUM: r(60124),
            PARTNERS_PERK_PERSONALIZE: r(50459),
            PARTNERS_PERK_REWARDS: r(86946),
            PARTNERS_PERK_VIP: r(28301),
            PARTNERS_HOODIE: r(71399),
            PARTNERS_FEATURED_LINK_REDDIT: r(68853),
            PARTNERS_FEATURED_LINK_TWITCH: r(46274),
            PARTNERS_FEATURED_LINK_YOUTUBE: r(61550),
            PARTNERS_FEATURED_LINK_FACEBOOK: r(21617),
            PARTNERS_FEATURED_LINK_GITHUB: r(41940),
            BRANDING_LOGO_WORDMARK_WHITE: r(93661),
            BRANDING_LOGO_WHITE: r(50634),
            REBRAND_BRANDING_LOGO_BLACK: r(73544),
            REBRAND_BRANDING_LOGO_WORDMARK_SPACING: r(65964),
            REBRAND_BRANDING_LOGO_SPACING: r(12800),
            ACKNOWLEDGEMENTS_LOVE: r(1846),
            DOWNLOADS_ICON_APP: r(48286),
            DOWNLOADS_ICON_MAC: r(60023),
            DOWNLOADS_ICON_IOS: r(70124),
            DOWNLOADS_ICON_ANDROID: r(53020),
            DOWNLOADS_ICON_LINUX: r(69007),
            DOWNLOADS_ICON_WINDOWS: r(13257),
            STREAMKIT_MUXY: r(34379),
            STREAMKIT_OBS: r(57332),
            STREAMKIT_XSPLIT: r(87716),
            STREAMKIT_PATREON: r(89896),
            STREAMKIT_NIGHTBOT: r(22264),
            STREAMKIT_ADDON_NIGHTBOT: r(41730),
            STREAMKIT_ADDON_MUXY: r(90825),
            STREAMKIT_ADDON_TWINGE: r(72385),
            STREAMKIT_ADDON_XSPLIT: r(92982),
            STREAMKIT_ADDON_OBS: r(53826),
            STREAMKIT_ADDON_TWITCH: r(10190),
            STREAMKIT_ADDON_YOUTUBE: r(59087),
            STREAMKIT_ADDON_SEPTAPUS: r(30842),
            STREAMKIT_ADDON_MEE6: r(71102),
            STREAMKIT_ADDON_AIRHORN_SOLUTIONS: r(72245),
            STREAMKIT_ADDON_MIXER: r(14794),
            STREAMKIT_ADDON_PATREON: r(8986),
            STREAMKIT_ADDON_PATREON_REFRESH: r(53176),
            STREAMKIT_ADDON_NIGHTBOT_REFRESH: r(1414),
            STREAMKIT_ADDON_TWITCH_REFRESH: r(30360),
            STREAMKIT_ADDON_XSPLIT_REFRESH: r(82435),
            STREAMKIT_ADDON_AIRHORN_SOLUTIONS_REFRESH: r(61522),
            REBRAND_STREAMKIT_ADDON_STREAMER_MODE_REFRESH: r(42712),
            STREAMKIT_INSTRUCTOR_SERVER: r(79108),
            STREAMKIT_INSTRUCTOR_BOTS: r(66445),
            STREAMKIT_INSTRUCTOR_REP: r(67726),
            SECURITY_LOGO: r(54245),
            SECURITY_BG_LG_TREES_HOLE: r(58863),
            SECURITY_BG_LG_TREES_REPEAT: r(89276),
            SECURITY_BG_SM_TREES_1: r(42395),
            SECURITY_BG_SM_BUG_TREE: r(93762),
            SECURITY_BG_SM_TREES_2: r(23464),
            SECURITY_BUG_SM: r(19507),
            SECURITY_BUG_MD: r(82750),
            SECURITY_BADGE: r(61981),
            SECURITY_STARS: r(52589),
            SECURITY_OTHERWISE_01: r(96231),
            SECURITY_OTHERWISE_02: r(65297),
            FORMS_ICON_CLOSE: r(44446),
            NITRO_WUMPUS_FLYING_MECH: r(94140),
            REFRESH_NITRO_BETTER_EMOJIS: r(25630),
            REFRESH_NITRO_PERSONAL_PROFILE: r(79020),
            REFRESH_NITRO_REP_SUPPORT: r(9093),
            REFRESH_NITRO_SUPPORT_SERVER: r(83942),
            REFRESH_NITRO_BIGGER_MEMES: r(53950),
            REFRESH_NITRO_HD_VIDEO: r(62131),
            REFRESH_NITRO_ACTIVITIES: r(65659),
            REBRAND_NITRO_LOGO: r(88290),
            REBRAND_NITRO_CLASSIC_LOGO: r(79947),
            HYPESQUAD_WUMPUS_PROCESSING: r(53503),
            HYPESQUAD_WUMPUS_SUBMIT: r(84332),
            HYPESQUAD_WUMPUS_SUBMITTED: r(49096),
            JOBS_CAROUSEL_1: r(75189),
            JOBS_CAROUSEL_2: r(90302),
            JOBS_CAROUSEL_3: r(54870),
            JOBS_CAROUSEL_6: r(85233),
            JOBS_CAROUSEL_7: r(29455),
            JOBS_CAROUSEL_8: r(64035),
            JOBS_CAROUSEL_9: r(91947),
            JOBS_CAROUSEL_10: r(22417),
            JOBS_CAROUSEL_11: r(88041),
            JOBS_CAROUSEL_12: r(66551),
            JOBS_CAROUSEL_13: r(9906),
            JOBS_CAROUSEL_14: r(50156),
            JOBS_CAROUSEL_15: r(50127),
            JOBS_CAROUSEL_17: r(567),
            JOBS_CAROUSEL_18: r(5609),
            JOBS_CAROUSEL_19: r(75234),
            JOBS_CAROUSEL_21: r(59084),
            JOBS_CAROUSEL_1_2X: r(96115),
            JOBS_CAROUSEL_2_2X: r(52343),
            JOBS_CAROUSEL_3_2X: r(71763),
            JOBS_CAROUSEL_6_2X: r(43164),
            JOBS_CAROUSEL_7_2X: r(23136),
            JOBS_CAROUSEL_8_2X: r(74620),
            JOBS_CAROUSEL_9_2X: r(46113),
            JOBS_CAROUSEL_10_2X: r(58438),
            JOBS_CAROUSEL_11_2X: r(92162),
            JOBS_CAROUSEL_12_2X: r(59531),
            JOBS_CAROUSEL_13_2X: r(79528),
            JOBS_CAROUSEL_14_2X: r(50150),
            JOBS_CAROUSEL_15_2X: r(57645),
            JOBS_CAROUSEL_17_2X: r(566),
            JOBS_CAROUSEL_18_2X: r(29558),
            JOBS_CAROUSEL_19_2X: r(33324),
            JOBS_CAROUSEL_21_2X: r(11577),
            JOBS_LEVER_ERROR: r(91566),
            VERIFICATION_BADGE: r(28806),
            VERIFICATION_ERROR: r(75611),
            OPEN_SOURCE_HEART: r(99638),
            OPEN_SOURCE_PROJECT_ICON_ACCESS: r(5377),
            OPEN_SOURCE_PROJECT_ICON_FAST_GLOBAL: r(76765),
            OPEN_SOURCE_PROJECT_ICON_LILLIPUT: r(51413),
            OPEN_SOURCE_PROJECT_ICON_SORTEDSET: r(55392),
            OPEN_SOURCE_PROJECT_ICON_MANIFOLD: r(60755),
            OPEN_SOURCE_PROJECT_ICON_DEQUE: r(52714),
            OPEN_SOURCE_PROJECT_ICON_ERLPACK: r(23711),
            OPEN_SOURCE_PROJECT_ICON_EX_HASH_RING: r(83924),
            OPEN_SOURCE_PROJECT_ICON_LOQUI: r(89073),
            OPEN_SOURCE_PROJECT_ICON_PUNT: r(48321),
            OPEN_SOURCE_PROJECT_ICON_SEMAPHORE: r(80187),
            OPEN_SOURCE_PROJECT_ICON_SIMPLEAST: r(88620),
            OPEN_SOURCE_GITHUB_STAR: r(30517),
            OPEN_SOURCE_SHAPE_BAR: r(71773),
            OPEN_SOURCE_SHAPE_CIRCLE: r(51141),
            OPEN_SOURCE_SHAPE_DIAMOND: r(50285),
            OPEN_SOURCE_SHAPE_TRIANGLE: r(63638),
            OPEN_SOURCE_SHAPE_WAVY_CORNER: r(67068),
            OPEN_SOURCE_CARD_VANITY_URL: r(66706),
            OPEN_SOURCE_CARD_LIBRARIES: r(16585),
            DOTS_TEXTURE_LEFT: r(76563),
            DOTS_TEXTURE_RIGHT: r(59475),
            FOUROHFOUR_NELLY_NOODLES: "https://cdn.discordapp.com/assets/content/d19dd056ce01e2fd5678d52153d444d35796e8314bde5aa536f10794c3e67f69.gif",
            ACKNOWLEDGEMENTS_SCROLLER_FOOTER: "https://cdn.discordapp.com/assets/content/e719db235822ca3a23221b909e3b647565ffe9256a2ac8dae86c7a91c7132245.gif",
            OPEN_SOURCE_ANIMATION_STILL: "https://cdn.discordapp.com/assets/content/4db2fdcdf120b2f3224806703eecc1f2d7d9731c11dcb2dfe5560b28b89d8450.png"
        };
        t.Videos = {
            NITRO_HERO_2560_WEBM: "https://cdn.discordapp.com/assets/content/438c7a08d68750935d5724bec09bbbff9d7ce5d944b33cdc8acf956a953a6057.webm",
            NITRO_HERO_2560_MP4: "https://cdn.discordapp.com/assets/content/9dc62ffff80c6a5a14f8db20deece8262587fa26585b411a70f26685683882fb.mp4",
            NITRO_HERO_1920_WEBM: "https://cdn.discordapp.com/assets/content/45e0304c3f742748533a42883c3148b3a8abda8c0bc501341db7248210f0932d.webm",
            NITRO_HERO_1920_MP4: "https://cdn.discordapp.com/assets/content/fc9c81f6c15b0ca372948bdb1c16e3ea03952bb2b576b64b882eeee82d4e32d3.mp4",
            NITRO_HERO_1440_WEBM: "https://cdn.discordapp.com/assets/content/bf78ad3b85e3c9f9bd49b38aded6473fcf353e87f0cc5891e1694bd8ac6d3c10.webm",
            NITRO_HERO_1440_MP4: "https://cdn.discordapp.com/assets/content/ac7b0c1760f2f5cbfc98606829d821a3d70539282102a93874d62c59978a361a.mp4"
        },
        t.Sounds = {
            ACKNOWLEDGEMENTS: r(21340)
        },
        t.ImageMetaData = {
            DOWNLOAD: r(72415),
            HYPESQUAD: r(78955),
            PARTNERS: r(89826),
            SECURITY: r(85058),
            STREAMKIT: r(38168),
            DEFAULT_REFRESH: r(69247),
            JOBS: r(53779),
            SAFETY: r(33182),
            VERIFICATION: r(25248),
            LEAGUE_CLUBS: r(59037)
        },
        t.Games = {
            DISCORD: {
                ID: "DISCORD",
                ICON: null,
                CHARACTER: o.ASSET_HERO_GAME_DISCORD,
                BACKGROUND: o.ASSET_BG_DISCORD,
                PARTICLES: [{
                    style: {
                        width: 28,
                        height: 31,
                        background: "url(" + o.ASSET_PARTICLE_DISCORD_1 + ")"
                    },
                    count: 5
                }, {
                    style: {
                        width: 35,
                        height: 35,
                        background: "url(" + o.ASSET_PARTICLE_DISCORD_2 + ")"
                    },
                    count: 5
                }, {
                    style: {
                        width: 33,
                        height: 30,
                        background: "url(" + o.ASSET_PARTICLE_DISCORD_3 + ")"
                    },
                    count: 5
                }, {
                    style: {
                        width: 41,
                        height: 37,
                        background: "url(" + o.ASSET_PARTICLE_DISCORD_4 + ")"
                    },
                    count: 5
                }, {
                    style: {
                        width: 67,
                        height: 56,
                        background: "url(" + o.ASSET_PARTICLE_DISCORD_5 + ")"
                    },
                    count: 5
                }, {
                    style: {
                        width: 51,
                        height: 46,
                        background: "url(" + o.ASSET_PARTICLE_DISCORD_6 + ")"
                    },
                    count: 5
                }],
                COPY: {
                    HEADER: "It's time to ditch Skype and TeamSpeak.  Discord is here.",
                    BODY: ["All-in-one voice and text chat for gamers that’s free, secure, and works on both your desktop and phone.\n          Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.", "You'll never go back."]
                },
                QUERYSTRING: ""
            },
            LEAGUE: {
                ID: "LEAGUE",
                ICON: o.ICON_HERO_GAME_LEAGUE,
                CHARACTER: o.ASSET_HERO_GAME_LEAGUE,
                BACKGROUND: o.ASSET_BG_LEAGUE,
                PARTICLES: [{
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_LOL_1 + ")"
                    },
                    count: 7
                }, {
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_LOL_2 + ")"
                    },
                    count: 7
                }, {
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_LOL_3 + ")"
                    },
                    count: 7
                }, {
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_LOL_4 + ")"
                    },
                    count: 7
                }],
                COPY: {
                    HEADER: "It's time to ditch Skype and TeamSpeak.  Discord is here.",
                    BODY: ["All-in-one voice and text chat for gamers that’s free, secure, and works on both your desktop and phone.\n          Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.", "You'll never go back."]
                },
                QUERYSTRING: "league"
            },
            DOTA: {
                ID: "DOTA",
                ICON: o.ICON_HERO_GAME_DOTA2,
                CHARACTER: o.ASSET_HERO_GAME_DOTA2,
                BACKGROUND: o.ASSET_BG_DOTA2,
                PARTICLES: [{
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_DOTA_1 + ")"
                    },
                    count: 6
                }, {
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_DOTA_2 + ")"
                    },
                    count: 6
                }, {
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_DOTA_3 + ")"
                    },
                    count: 6
                }, {
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_DOTA_4 + ")"
                    },
                    count: 6
                }, {
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_DOTA_5 + ")"
                    },
                    count: 6
                }],
                COPY: {
                    HEADER: "It's time to ditch Skype and TeamSpeak.  Discord is here.",
                    BODY: ["All-in-one voice and text chat for gamers that’s free, secure, and works on both your desktop and phone.\n          Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.", "You'll never go back."]
                },
                QUERYSTRING: "dota"
            },
            WOW: {
                ID: "WOW",
                ICON: o.ICON_HERO_GAME_WOW,
                CHARACTER: o.ASSET_HERO_GAME_WOW,
                BACKGROUND: o.ASSET_BG_WOW,
                PARTICLES: [{
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_WOW_1 + ")"
                    },
                    count: 8
                }, {
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_WOW_2 + ")"
                    },
                    count: 8
                }, {
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_WOW_3 + ")"
                    },
                    count: 8
                }, {
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_WOW_4 + ")"
                    },
                    count: 8
                }],
                COPY: {
                    HEADER: "It's time to ditch Skype and TeamSpeak.  Discord is here.",
                    BODY: ["All-in-one voice and text chat for gamers that’s free, secure, and works on both your desktop and phone.\n          Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.", "You'll never go back."]
                },
                QUERYSTRING: "wow"
            },
            FFXIV: {
                ID: "FFXIV",
                ICON: o.ICON_HERO_GAME_FFXIV,
                CHARACTER: o.ASSET_HERO_GAME_FFXIV,
                BACKGROUND: o.ASSET_BG_FFXIV,
                PARTICLES: [{
                    style: {
                        width: 50,
                        height: 50,
                        background: "url(" + o.ASSET_PARTICLE_FFXIV_1 + ")"
                    },
                    count: 3
                }, {
                    style: {
                        width: 50,
                        height: 50,
                        background: "url(" + o.ASSET_PARTICLE_FFXIV_2 + ")"
                    },
                    count: 3
                }, {
                    style: {
                        width: 50,
                        height: 50,
                        background: "url(" + o.ASSET_PARTICLE_FFXIV_3 + ")"
                    },
                    count: 3
                }, {
                    style: {
                        width: 50,
                        height: 50,
                        background: "url(" + o.ASSET_PARTICLE_FFXIV_4 + ")"
                    },
                    count: 3
                }],
                COPY: {
                    HEADER: "It's time to ditch Skype and TeamSpeak.  Discord is here.",
                    BODY: ["All-in-one voice and text chat for gamers that’s free, secure, and works on both your desktop and phone.\n          Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.", "You'll never go back."]
                },
                QUERYSTRING: "ffxiv"
            },
            CS: {
                ID: "CS",
                ICON: o.ICON_HERO_GAME_CS,
                CHARACTER: o.ASSET_HERO_GAME_CS,
                BACKGROUND: o.ASSET_BG_CS,
                PARTICLES: [{
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_CS_1 + ")"
                    },
                    count: 5
                }, {
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_CS_2 + ")"
                    },
                    count: 5
                }, {
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_CS_3 + ")"
                    },
                    count: 5
                }, {
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_CS_4 + ")"
                    },
                    count: 5
                }, {
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_CS_5 + ")"
                    },
                    count: 5
                }, {
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_CS_6 + ")"
                    },
                    count: 5
                }],
                COPY: {
                    HEADER: "It's time to ditch Skype and TeamSpeak.  Discord is here.",
                    BODY: ["All-in-one voice and text chat for gamers that’s free, secure, and works on both your desktop and phone.\n          Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.", "You'll never go back."]
                },
                QUERYSTRING: "cs"
            },
            MINECRAFT: {
                ID: "MINECRAFT",
                ICON: o.ICON_HERO_GAME_MINECRAFT,
                CHARACTER: o.ASSET_HERO_GAME_MINECRAFT,
                BACKGROUND: o.ASSET_BG_MINECRAFT,
                PARTICLES: [{
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_MC_1 + ")"
                    },
                    count: 5
                }, {
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_MC_2 + ")"
                    },
                    count: 5
                }, {
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_MC_3 + ")"
                    },
                    count: 5
                }, {
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_MC_4 + ")"
                    },
                    count: 5
                }, {
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_MC_5 + ")"
                    },
                    count: 5
                }, {
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_MC_6 + ")"
                    },
                    count: 5
                }, {
                    style: {
                        width: 40,
                        height: 40,
                        background: "url(" + o.ASSET_PARTICLE_MC_7 + ")"
                    },
                    count: 5
                }],
                COPY: {
                    HEADER: "It's time to ditch Skype and TeamSpeak.  Discord is here.",
                    BODY: ["All-in-one voice and text chat for gamers that’s free, secure, and works on both your desktop and phone.\n          Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.", "You'll never go back."]
                },
                QUERYSTRING: "minecraft"
            }
        },
        t.Addons = [{
            name: "Patreon",
            icon: o.STREAMKIT_ADDON_PATREON,
            logo: o.STREAMKIT_PATREON,
            description: "Allow Discord to automatically sync your patrons to a role. This integration can let you give\n        exclusive access to private rooms, the ability to post links, or even join voice chat.",
            website: "https://www.patreon.com/",
            support: "https://patreon.zendesk.com/hc/en-us/articles/213552323-How-do-I-set-up-Discord-rewards-?utm_medium=partnerships&utm_source=zendesk&utm_campaign=discord0913",
            addLink: "https://patreon.zendesk.com/hc/en-us/articles/213552323-How-do-I-set-up-Discord-rewards-?utm_medium=partnerships&utm_source=zendesk&utm_campaign=discord0913",
            features: ["Sync Patreon patrons to a Discord role", "Assign different roles based on which rewards patrons subscribe to"],
            logoColor: "#E6461A",
            buttonText: "Add to Discord"
        }, {
            name: "Nightbot",
            icon: o.STREAMKIT_ADDON_NIGHTBOT,
            logo: o.STREAMKIT_NIGHTBOT,
            description: "Nightbot provides a pile of chat commands and auto-moderation tools for your Discord. This\n        includes a blacklist for inappropriate words/phrases and the ability to suppress spamming of excessive\n        symbols, emotes, capital letters, links, copypasta, and more. Whew, there’s a lot here.",
            support: "https://community.nightdev.com/c/nightbot",
            website: "https://beta.nightbot.tv/",
            addLink: "https://beta.nightbot.tv/integrations",
            features: ["Use your Nightbot commands in Discord", "Sync Nightbot regulars to a Discord role", "Sync Twitch mods to a Discord role", "Filter spam and create a chat blacklist"],
            logoColor: "#2E4051",
            buttonText: "Add to Discord"
        }, {
            name: "Muxy",
            icon: o.STREAMKIT_ADDON_MUXY,
            logo: o.STREAMKIT_MUXY,
            description: "Muxy allows customizable alerts for Twitch and your Discord server so you know how you’re doing.\n        Sometimes you gotta check in on yourself, ya know? Gotta make sure things are moving in the right direction.",
            support: "https://muxy.uservoice.com/",
            website: "https://muxy.io/",
            addLink: "https://u.muxy.io/dashboard/connections",
            features: ["Notify your Discord channel when you go live on Twitch", "Display follow, donation, subscription, and host alerts in your Discord channel", "Show a summary of stream stats after your Twitch stream ends, including uptime, games played,\n          viewers, chatter, and new followers", "Display information and stats about any Twitch channel"],
            logoColor: "#88C9C9",
            buttonText: "Add to Discord"
        }, {
            name: "Twitch Integration",
            icon: o.STREAMKIT_ADDON_TWITCH,
            description: "Allow Discord to automatically sync your Twitch subs to a role. You can also let\n        your Twitch subs use your Twitch emotes globally within Discord. Treat your subs as subs and the\n        rest as plebs.",
            addLink: "https://" + n.SUPPORT_DOMAIN + "/hc/en-us/articles/212112068-Twitch-Integration-FAQ",
            features: ["Sync Twitch subs to a Discord role", "Automatically demote or kick people after a grace period when they stop subbing", "Let subs find your Discord server by syncing their Twitch", "Sync your Twitch emotes to be used by subs anywhere within Discord"],
            logoColor: "#762BC2",
            buttonText: "Learn More"
        }, {
            name: "YouTube Integration",
            icon: o.STREAMKIT_ADDON_YOUTUBE,
            description: "Allow Discord to automatically sync your YouTube channel memberships to a role.\n        Make a private room for them to discuss how much they like each other. ",
            addLink: "https://" + n.SUPPORT_DOMAIN + "/hc/en-us/articles/215162978-Youtube-Channel-Memberships-Integration-FAQ",
            features: ["Sync YouTube channel memberships to a Discord role", "Automatically demote or kick people after a grace period when they stop renewing their membership", "Let members find your Discord server by syncing their YouTube account"],
            logoColor: "#333333",
            buttonText: "Learn More"
        }, {
            name: "Twinge",
            icon: o.STREAMKIT_ADDON_TWINGE,
            description: "Allow Twinge to share analytics and Twitch community interaction within your Discord server.\n        Be the second to know about Twinge reviews (because the first is the person who wrote it.\n        This is a bot not a time wizard).",
            website: "http://www.twinge.tv/",
            addLink: "http://www.twinge.tv/sys/discord",
            features: ["Notify you of new Twinge reviews as they come in", "COMING SOON: Have a post-stream analysis sent to you as soon as your stream ends"],
            logoColor: "#303F4C",
            buttonText: "Add to Discord"
        }, {
            name: "Mixer Integration",
            icon: o.STREAMKIT_ADDON_MIXER,
            description: "Allow Discord to automatically sync your Mixer subscribers to a role.\n        Make a private room for them to discuss how awesome they are.",
            support: "https://watchbeam.zendesk.com/hc/en-us/articles/211272323-Using-the-Discord-Integration",
            website: "https://mixer.com",
            addLink: "https://mixer.com/me/account/security",
            features: ["Sync Mixer subscribers to a Discord role", "Automatically demote or kick people after a grace period when they stop subbing", "Let subs find your Discord server by connecting their Mixer account"],
            logoColor: "#27282B",
            buttonText: "Add to Discord"
        }, {
            name: "XSplit",
            icon: o.STREAMKIT_ADDON_XSPLIT,
            logo: o.STREAMKIT_XSPLIT,
            description: "Customize, promote, and show off your Discord community directly on your stream. Share your Discord\n        chat on your stream and get everybody the attention they deserve.",
            website: "https://www.xsplit.com/",
            addLink: "https://streamkit." + n.PRIMARY_DOMAIN + "/overlay",
            features: ["Show who’s talking in a Discord voice channel", "Show Discord text chat from any channel on stream", "Display your Discord community link", "Customize the look and feel with your own style sheet", "Arrange the widgets on screen however you want"],
            logoColor: "#0095DE",
            buttonText: "Connect to Discord"
        }, {
            name: "OBS",
            icon: o.STREAMKIT_ADDON_OBS,
            logo: o.STREAMKIT_OBS,
            description: "Customize, promote, and show off your Discord community directly on your stream. Display your\n        Discord chat alongside your Twitch chat so the memes can be shown in unison.",
            website: "https://obsproject.com/",
            addLink: "https://streamkit." + n.PRIMARY_DOMAIN + "/overlay",
            features: ["Show who’s talking in a Discord voice channel", "Show Discord text chat from any channel on stream", "Display your Discord community link", "Customize the look and feel with your own style sheet", "Arrange the widgets on screen however you want"],
            logoColor: "#444444",
            buttonText: "Connect to Discord"
        }],
        t.CommunityAddons = [{
            name: "Septapus",
            icon: o.STREAMKIT_ADDON_SEPTAPUS,
            description: "Make a one to six panel comic with dialogue directly from your Discord chat.",
            website: "http://septapus.com/",
            addLink: "http://septapus.com/",
            features: ["Number Trivia", "See bigger versions of emoji", "Magic: The Gathering card searches", "Set reminders"],
            logoColor: "#64D9B3",
            buttonText: "Add to Discord"
        }, {
            name: "Airhorn Solutions",
            icon: o.STREAMKIT_ADDON_AIRHORN_SOLUTIONS,
            description: "Play a slew of sounds including Airhorns and other audio memes.",
            website: "https://airhorn.solutions/",
            addLink: "https://airhorn.solutions/",
            features: ["Annoy your friends", "Find the rare sodiepop", "Discover the secret Airhorn command", "Play Airhorn sounds"],
            logoColor: "#F36958",
            buttonText: "Add to Discord"
        }, {
            name: "MEE6",
            icon: o.STREAMKIT_ADDON_MEE6,
            description: "Make your server a bit more fun with a leveling system, Twitch/Reddit notifications, customizable\n        timed messages, and super duper moderator things. P.S. we have custom commands.",
            website: "https://mee6.xyz/",
            addLink: "https://mee6.xyz/",
            features: ["Have Discord members level up by participating in chat", "Keep things under control with slow mode, automod, and moderator commands", "Display a welcome message when someone joins", "Even more, including custom commands and Anime/Manga directory searches"],
            logoColor: "#60D1F6",
            buttonText: "Add to Discord"
        }, {
            name: "Streamer Mode",
            icon: o.BRANDING_LOGO_WHITE,
            description: "It’s like a really big blanket that you can hide all your important information under.\n        A big blurple blanket. Check it in Discord’s User Settings menu under Streamer Mode.",
            addLink: "https://" + n.SUPPORT_DOMAIN + "/hc/en-us/articles/218485407-Streamer-Mode-101",
            features: ["Hide sensitive account info", "Disable all SFX/Notifications", "Automatically turns on and off with OBS/XSplit", "Already built into Discord"],
            logoColor: n.Colors.BRAND,
            buttonText: "Learn More"
        }]
    }
    ,
    10162: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = void 0;
        var n = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = l(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && {}.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }(r(70079))
          , o = s(r(17636))
          , a = r(24792)
          , i = s(r(75511))
          , u = r(41779)
          , c = ["captchaService", "sitekey", "rqdata", "onRender", "onVerify", "onError", "onOpen", "onClose", "onChalExpired", "size", "className"];
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function l(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (l = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function f() {
            return f = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ,
            f.apply(null, arguments)
        }
        function d(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, o, a, i, u = [], c = !0, s = !1;
                    try {
                        if (a = (r = r.call(e)).next,
                        0 === t) {
                            if (Object(r) !== r)
                                return;
                            c = !1
                        } else
                            for (; !(c = (n = a.call(r)).done) && (u.push(n.value),
                            u.length !== t); c = !0)
                                ;
                    } catch (e) {
                        s = !0,
                        o = e
                    } finally {
                        try {
                            if (!c && null != r.return && (i = r.return(),
                            Object(i) !== i))
                                return
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return u
                }
            }(e, t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return p(e, t);
                    var r = {}.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? p(e, t) : void 0
                }
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function p(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        var _ = function(e) {
            var t = e.captchaService
              , r = void 0 === t ? a.CaptchaTypes.HCAPTCHA : t
              , s = e.sitekey
              , l = e.rqdata
              , p = e.onRender
              , _ = e.onVerify
              , E = e.onError
              , b = e.onOpen
              , A = e.onClose
              , O = e.onChalExpired
              , y = e.size
              , T = e.className
              , S = function(e, t) {
                if (null == e)
                    return {};
                var r = {};
                for (var n in e)
                    if ({}.hasOwnProperty.call(e, n)) {
                        if (t.includes(n))
                            continue;
                        r[n] = e[n]
                    }
                return r
            }(e, c)
              , v = n.useRef(null)
              , h = d(n.useState(!1), 2)
              , g = h[0]
              , m = h[1]
              , I = n.useCallback((function() {
                if (null != l && "" !== l && null != v.current) {
                    var e;
                    null === (e = v.current) || void 0 === e || e.setData({
                        rqdata: l
                    })
                }
                if ("invisible" === y) {
                    var t;
                    null === (t = v.current) || void 0 === t || t.execute()
                }
            }
            ), [l, v, y])
              , N = n.useCallback((function() {
                g || m(!0);
                I()
            }
            ), [g, I]);
            n.useEffect((function() {
                I()
            }
            ), [I]);
            n.useEffect((function() {
                N()
            }
            ), [N]);
            var R = n.useCallback((function() {
                I();
                null == E || E()
            }
            ), [I, E]);
            null != s && "" !== s || (s = u.RECAPTCHA_SITE_KEY);
            return r === a.CaptchaTypes.HCAPTCHA ? n.createElement(o.default, f({
                ref: v,
                sitekey: s,
                host: void 0
            }, S, {
                onLoad: N,
                onError: R,
                onVerify: _,
                onChalExpired: O,
                onOpen: b,
                onClose: A,
                size: y
            })) : n.createElement(i.default, f({}, S, {
                onLoad: N,
                onRender: p,
                onVerify: _,
                onError: R,
                sitekey: s,
                className: T
            }))
        };
        _.displayName = "Captcha";
        t.default = _
    }
    ,
    75511: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = void 0;
        var n, o = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = l(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && {}.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }(r(70079)), a = s(r(3997)), i = s(r(45779)), u = s(r(33217)), c = ["className", "error", "sitekey"];
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function l(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (l = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function f(e, t, r, o) {
            n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var a = e && e.defaultProps
              , i = arguments.length - 3;
            if (t || 0 === i || (t = {
                children: void 0
            }),
            1 === i)
                t.children = o;
            else if (i > 1) {
                for (var u = Array(i), c = 0; c < i; c++)
                    u[c] = arguments[c + 3];
                t.children = u
            }
            if (t && a)
                for (var s in a)
                    void 0 === t[s] && (t[s] = a[s]);
            else
                t || (t = a || {});
            return {
                $$typeof: n,
                type: e,
                key: void 0 === r ? null : "" + r,
                ref: null,
                props: t,
                _owner: null
            }
        }
        function d() {
            return d = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ,
            d.apply(null, arguments)
        }
        t.default = function(e) {
            var t = e.className
              , r = e.error
              , n = e.sitekey
              , s = function(e, t) {
                if (null == e)
                    return {};
                var r = {};
                for (var n in e)
                    if ({}.hasOwnProperty.call(e, n)) {
                        if (t.includes(n))
                            continue;
                        r[n] = e[n]
                    }
                return r
            }(e, c);
            return f("div", {
                className: (0,
                a.default)(null != r ? u.default.recaptchaError : null, t)
            }, void 0, o.createElement(i.default, d({
                sitekey: n
            }, s)))
        }
    }
    ,
    6450: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function(e, t, r) {
            void 0 === t && (t = "stable");
            void 0 === r && (r = "");
            return f({
                url: (0,
                i.useStateFromStores)([c.default], (function() {
                    return c.default.getDownloadLink(e, t, r)
                }
                ), [e, t, r])
            }, p(e))
        }
        ;
        t.getAppDetails = p;
        !function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = l(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && {}.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
            n.default = e,
            r && r.set(e, n)
        }(r(70079));
        var n, o, a, i = r(94179), u = r(13321), c = (n = r(75033)) && n.__esModule ? n : {
            default: n
        }, s = r(54821);
        function l(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (l = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function f() {
            return f = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ,
            f.apply(null, arguments)
        }
        function d(e, t, r, n) {
            a || (a = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var o = e && e.defaultProps
              , i = arguments.length - 3;
            if (t || 0 === i || (t = {
                children: void 0
            }),
            1 === i)
                t.children = n;
            else if (i > 1) {
                for (var u = Array(i), c = 0; c < i; c++)
                    u[c] = arguments[c + 3];
                t.children = u
            }
            if (t && o)
                for (var s in o)
                    void 0 === t[s] && (t[s] = o[s]);
            else
                t || (t = o || {});
            return {
                $$typeof: a,
                type: e,
                key: void 0 === r ? null : "" + r,
                ref: null,
                props: t,
                _owner: null
            }
        }
        function p(e) {
            return e === c.default.WINDOWS ? {
                main: {
                    header: s.Messages.DOWNLOAD_GET_DISCORD_WINDOWS,
                    info: s.Messages.DOWNLOAD_OS_REQUIREMENTS_WINDOWS,
                    hasPTBText: !0
                },
                other: {
                    header: s.Messages.DOWNLOAD_DOWNLOAD_FOR_WINDOWS
                },
                iPadImage: u.Images.DOWNLOADS_ICON_APP,
                image: u.Images.DOWNLOADS_ICON_WINDOWS,
                architectures: c.default.getDownloadArchitectures(e)
            } : e === c.default.MAC ? {
                main: {
                    header: s.Messages.DOWNLOAD_GET_DISCORD_MAC,
                    info: s.Messages.DOWNLOAD_OS_REQUIREMENTS_MAC,
                    hasPTBText: !0
                },
                other: {
                    header: s.Messages.DOWNLOAD_DOWNLOAD_FOR_MAC
                },
                iPadImage: u.Images.DOWNLOADS_ICON_APP,
                image: u.Images.DOWNLOADS_ICON_MAC
            } : e === c.default.LINUX ? {
                main: {
                    header: s.Messages.DOWNLOAD_GET_DISCORD_LINUX,
                    info: s.Messages.DOWNLOAD_OS_REQUIREMENTS_LINUX,
                    hasPTBText: !0
                },
                other: {
                    header: s.Messages.DOWNLOAD_DOWNLOAD_FOR_LINUX
                },
                iPadImage: u.Images.DOWNLOADS_ICON_APP,
                image: u.Images.DOWNLOADS_ICON_LINUX,
                formats: c.default.getDownloadFormats(e)
            } : e === c.default.IOS ? {
                main: {
                    header: s.Messages.DOWNLOAD_GET_DISCORD_IOS,
                    info: s.Messages.DOWNLOAD_OS_REQUIREMENTS_IOS,
                    hasPTBText: !1
                },
                other: {
                    header: s.Messages.DOWNLOAD_DOWNLOAD_FOR_IOS
                },
                target: "_blank",
                image: u.Images.DOWNLOADS_ICON_IOS
            } : e === c.default.ANDROID ? {
                main: {
                    header: s.Messages.DOWNLOAD_GET_DISCORD_ANDROID,
                    info: s.Messages.DOWNLOAD_OS_REQUIREMENTS_ANDROID,
                    hasPTBText: !1
                },
                other: {
                    header: s.Messages.DOWNLOAD_DOWNLOAD_FOR_ANDROID
                },
                target: "_blank",
                image: u.Images.DOWNLOADS_ICON_ANDROID
            } : {
                main: {
                    header: s.Messages.DOWNLOAD_GET_DISCORD_GENERIC,
                    info: o || (o = d("span", {}, void 0, " ")),
                    hasPTBText: !0
                },
                other: {
                    header: s.Messages.DOWNLOAD_DOWNLOAD_FOR_GENERIC
                },
                iPadImage: u.Images.DOWNLOADS_ICON_APP,
                image: u.Images.DOWNLOADS_ICON_WINDOWS
            }
        }
    }
    ,
    67131: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = v;
        var n, o = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = b(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && {}.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }(r(70079)), a = r(94179), i = E(r(6450)), u = E(r(35207)), c = E(r(75033)), s = E(r(40634)), l = r(52618), f = E(r(57551)), d = E(r(88068)), p = ["platform", "downloadFormats", "className", "children", "analyticsLocation"], _ = ["platform", "children", "analyticsLocation"];
        function E(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function b(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (b = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function A() {
            return A = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ,
            A.apply(null, arguments)
        }
        function O(e, t, r, o) {
            n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var a = e && e.defaultProps
              , i = arguments.length - 3;
            if (t || 0 === i || (t = {
                children: void 0
            }),
            1 === i)
                t.children = o;
            else if (i > 1) {
                for (var u = Array(i), c = 0; c < i; c++)
                    u[c] = arguments[c + 3];
                t.children = u
            }
            if (t && a)
                for (var s in a)
                    void 0 === t[s] && (t[s] = a[s]);
            else
                t || (t = a || {});
            return {
                $$typeof: n,
                type: e,
                key: void 0 === r ? null : "" + r,
                ref: null,
                props: t,
                _owner: null
            }
        }
        function y(e, t) {
            if (null == e)
                return {};
            var r = {};
            for (var n in e)
                if ({}.hasOwnProperty.call(e, n)) {
                    if (t.includes(n))
                        continue;
                    r[n] = e[n]
                }
            return r
        }
        function T(e) {
            var t = e.platform
              , r = e.downloadFormats
              , n = e.className
              , l = e.children
              , _ = e.analyticsLocation
              , E = y(e, p)
              , b = (0,
            a.useStateFromStores)([c.default], (function() {
                return r.map((function(e) {
                    var r = c.default.getDownloadLink(t, "stable", e.value);
                    return {
                        key: e.value,
                        name: e.label,
                        link: r,
                        onClick: function() {
                            return (0,
                            f.default)(t, !1, _, r, !1)
                        }
                    }
                }
                ))
            }
            ), [_, r, t])
              , T = (0,
            i.default)(t, "stable");
            return o.createElement(u.default, A({
                className: n,
                items: b
            }, E, {
                navId: "current-platform-download-dropdown"
            }), null != l ? l : o.createElement(o.Fragment, null, O(s.default, {
                className: d.default.icon
            }), T.other.header))
        }
        T.displayName = "MultipleFormatDownloadButton";
        function S(e) {
            var t = e.platform
              , r = e.children
              , n = e.analyticsLocation
              , u = y(e, _)
              , p = (0,
            i.default)(t, "stable")
              , E = (0,
            a.useStateFromStores)([c.default], (function() {
                return c.default.isMobile()
            }
            )) ? c.default.getMobileDownloadText() : p.other.header;
            return o.createElement(l.LinkButton, A({
                href: p.url
            }, u, {
                onClick: function() {
                    (0,
                    f.default)(t, !1, n, p.url, !1)
                }
            }), null != r ? r : o.createElement(o.Fragment, null, O(s.default, {
                className: d.default.icon
            }), E))
        }
        S.displayName = "SingleFormatDownloadButton";
        function v(e) {
            var t = (0,
            a.useStateFromStores)([c.default], (function() {
                return c.default.platform
            }
            ))
              , r = (0,
            a.useStateFromStores)([c.default], (function() {
                return c.default.getDownloadFormats()
            }
            ));
            return null == r ? o.createElement(S, A({}, e, {
                platform: t
            })) : o.createElement(T, A({}, e, {
                platform: t,
                downloadFormats: r
            }))
        }
        v.displayName = "CurrentPlatformDownloadButton"
    }
    ,
    90030: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.DropdownItem = E;
        t.default = t.DropdownOrientation = void 0;
        var n, o = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = l(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && {}.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }(r(70079)), a = s(r(3997)), i = s(r(55578)), u = ["className", "children"], c = ["className", "children", "orientation"];
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function l(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (l = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function f() {
            return f = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ,
            f.apply(null, arguments)
        }
        function d(e, t) {
            if (null == e)
                return {};
            var r = {};
            for (var n in e)
                if ({}.hasOwnProperty.call(e, n)) {
                    if (t.includes(n))
                        continue;
                    r[n] = e[n]
                }
            return r
        }
        var p = t.DropdownOrientation = function(e) {
            e[e.BOTTOM = 0] = "BOTTOM";
            e[e.TOP = 1] = "TOP";
            return e
        }({})
          , _ = ((n = {})[p.BOTTOM] = i.default.orientationBottom,
        n[p.TOP] = i.default.orientationTop,
        n);
        function E(e) {
            var t = e.className
              , r = e.children
              , n = d(e, u);
            return o.createElement("div", f({
                className: (0,
                a.default)(i.default.__invalid_dropdownItem, t)
            }, n), r)
        }
        E.displayName = "DropdownItem";
        t.default = o.forwardRef((function(e, t) {
            var r = e.className
              , n = e.children
              , u = e.orientation
              , s = void 0 === u ? p.BOTTOM : u
              , l = d(e, c);
            return o.createElement("div", f({
                ref: t,
                className: (0,
                a.default)(i.default.dropdown, _[s], r)
            }, l), n)
        }
        ))
    }
    ,
    46270: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.useDropdownProps = function(e) {
            var t = e.close;
            return n.useMemo((function() {
                return {
                    onBlurCapture: function(e) {
                        var r = e.currentTarget;
                        setTimeout((function() {
                            r.contains(r.ownerDocument.activeElement) || t()
                        }
                        ), 0)
                    },
                    onKeyDownCapture: function(e) {
                        e.keyCode === o.KeyboardKeyCodes.ESCAPE && t()
                    }
                }
            }
            ), [t])
        }
        ;
        t.useOnKeyDownOpen = function(e) {
            var t = e.open;
            return n.useCallback((function(e) {
                if (e.keyCode === o.KeyboardKeyCodes.SPACE || e.keyCode === o.KeyboardKeyCodes.ENTER || e.keyCode === o.KeyboardKeyCodes.ARROW_DOWN || e.keyCode === o.KeyboardKeyCodes.ARROW_UP) {
                    e.preventDefault();
                    t(e.keyCode === o.KeyboardKeyCodes.ARROW_UP)
                }
            }
            ), [t])
        }
        ;
        var n = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = a(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if ("default" !== i && {}.hasOwnProperty.call(e, i)) {
                    var u = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                    u && (u.get || u.set) ? Object.defineProperty(n, i, u) : n[i] = e[i]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }(r(70079))
          , o = r(41779);
        function a(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (a = function(e) {
                return e ? r : t
            }
            )(e)
        }
    }
    ,
    48553: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function(e) {
            void 0 === e && (e = !1);
            var t = (l = o.useState(!0),
            f = 2,
            function(e) {
                if (Array.isArray(e))
                    return e
            }(l) || function(e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, o, a, i, u = [], c = !0, s = !1;
                    try {
                        if (a = (r = r.call(e)).next,
                        0 === t) {
                            if (Object(r) !== r)
                                return;
                            c = !1
                        } else
                            for (; !(c = (n = a.call(r)).done) && (u.push(n.value),
                            u.length !== t); c = !0)
                                ;
                    } catch (e) {
                        s = !0,
                        o = e
                    } finally {
                        try {
                            if (!c && null != r.return && (i = r.return(),
                            Object(i) !== i))
                                return
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return u
                }
            }(l, f) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return s(e, t);
                    var r = {}.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? s(e, t) : void 0
                }
            }(l, f) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }())
              , r = t[0]
              , n = t[1]
              , c = (0,
            a.useStateFromStores)([i.default], (function() {
                return i.default.isMobile()
            }
            ));
            var l, f;
            o.useEffect((function() {
                n(u.IS_APP_COMPATIBLE_BROWSER)
            }
            ), []);
            if (c && !e)
                return !1;
            return r
        }
        ;
        var n, o = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = c(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && {}.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }(r(70079)), a = r(94179), i = (n = r(75033)) && n.__esModule ? n : {
            default: n
        }, u = r(29978);
        function c(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (c = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
    }
    ,
    93125: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.useUniqueUsernameRegistrationExperiment = function() {
            var e = (0,
            o.useStateFromStores)([a.default], (function() {
                return a.default.getEligibleExperiment(i.Experiments.UNIQUE_USERNAME_REGISTRATION)
            }
            ));
            if (null != e)
                return (null == e ? void 0 : e.bucket) > i.ExperimentBuckets.CONTROL;
            return !1
        }
        ;
        var n, o = r(94179), a = (n = r(74146)) && n.__esModule ? n : {
            default: n
        }, i = r(41779)
    }
    ,
    35207: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = S;
        var n, o = E(r(70079)), a = p(r(3997)), i = r(50389), u = E(r(90030)), c = r(46270), s = p(r(52618)), l = p(r(53132)), f = p(r(68134)), d = ["className", "children", "items", "navId"];
        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function _(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (_ = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function E(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = _(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && {}.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        function b(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, o, a, i, u = [], c = !0, s = !1;
                    try {
                        if (a = (r = r.call(e)).next,
                        0 === t) {
                            if (Object(r) !== r)
                                return;
                            c = !1
                        } else
                            for (; !(c = (n = a.call(r)).done) && (u.push(n.value),
                            u.length !== t); c = !0)
                                ;
                    } catch (e) {
                        s = !0,
                        o = e
                    } finally {
                        try {
                            if (!c && null != r.return && (i = r.return(),
                            Object(i) !== i))
                                return
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return u
                }
            }(e, t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return A(e, t);
                    var r = {}.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? A(e, t) : void 0
                }
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function A(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function O() {
            return O = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ,
            O.apply(null, arguments)
        }
        function y(e, t, r, o) {
            n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var a = e && e.defaultProps
              , i = arguments.length - 3;
            if (t || 0 === i || (t = {
                children: void 0
            }),
            1 === i)
                t.children = o;
            else if (i > 1) {
                for (var u = Array(i), c = 0; c < i; c++)
                    u[c] = arguments[c + 3];
                t.children = u
            }
            if (t && a)
                for (var s in a)
                    void 0 === t[s] && (t[s] = a[s]);
            else
                t || (t = a || {});
            return {
                $$typeof: n,
                type: e,
                key: void 0 === r ? null : "" + r,
                ref: null,
                props: t,
                _owner: null
            }
        }
        function T(e) {
            var t = e.navId
              , r = e.items
              , n = e.close
              , s = e.initialFocusPath
              , d = (0,
            i.useMenuNavigator)({
                navId: t,
                items: r,
                initialFocusPath: s
            })
              , p = o.useRef(null);
            o.useEffect((function() {
                var e;
                null === (e = p.current) || void 0 === e || e.focus()
            }
            ), []);
            return o.createElement(u.default, O({
                ref: p,
                className: f.default.dropdown
            }, (0,
            c.useDropdownProps)({
                close: n
            }), d.getContainerProps()), r.map((function(e) {
                var t;
                return y(u.DropdownItem, {
                    className: (0,
                    a.default)(f.default.__invalid_dropdownItem, (t = {},
                    t[f.default.focused] = d.isFocused([e.key]),
                    t))
                }, e.name, o.createElement("a", O({
                    className: f.default.dropdownLink,
                    href: e.link,
                    onClick: e.onClick
                }, d.getItemProps({
                    path: [e.key]
                })), y(l.default, {
                    className: f.default.dropdownText
                }, void 0, e.name)))
            }
            )))
        }
        T.displayName = "DownloadDropdown";
        function S(e) {
            var t = e.className
              , r = e.children
              , n = e.items
              , i = e.navId
              , u = function(e, t) {
                if (null == e)
                    return {};
                var r = {};
                for (var n in e)
                    if ({}.hasOwnProperty.call(e, n)) {
                        if (t.includes(n))
                            continue;
                        r[n] = e[n]
                    }
                return r
            }(e, d)
              , l = b(o.useState(!1), 2)
              , p = l[0]
              , _ = l[1]
              , E = b(o.useState([]), 2)
              , A = E[0]
              , S = E[1];
            var v = (0,
            c.useOnKeyDownOpen)({
                open: function(e) {
                    S(e ? [n[n.length - 1].key] : [n[0].key]);
                    _(!0)
                }
            });
            return y("div", {
                className: (0,
                a.default)(f.default.container, t),
                onKeyDown: v
            }, void 0, o.createElement(s.default, O({
                onClick: function() {
                    return _(!p)
                }
            }, u), r), p ? y(T, {
                items: n,
                close: function() {
                    _(!1)
                },
                navId: i,
                initialFocusPath: A
            }) : null)
        }
        S.displayName = "DownloadDropdownButton"
    }
    ,
    92483: (e, t, r) => {
        "use strict";
        var n = r(44675);
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = W;
        var o, a, i = N(r(70079)), u = m(r(3997)), c = N(r(89708)), s = r(94179), l = r(49310), f = r(58369), d = m(r(10162)), p = m(r(67131)), _ = m(r(48553)), E = r(93125), b = m(r(53585)), A = m(r(61578)), O = N(r(52618)), y = m(r(38061)), T = N(r(53132)), S = m(r(61834)), v = r(41779), h = m(r(54821)), g = m(r(3359));
        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function I(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (I = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function N(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = I(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && {}.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        function R() {
            R = function() {
                return t
            }
            ;
            var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(e, t, r) {
                e[t] = r.value
            }
            , a = "function" == typeof Symbol ? Symbol : {}, i = a.iterator || "@@iterator", u = a.asyncIterator || "@@asyncIterator", c = a.toStringTag || "@@toStringTag";
            function s(e, t, r) {
                return Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                s({}, "")
            } catch (e) {
                s = function(e, t, r) {
                    return e[t] = r
                }
            }
            function l(e, t, r, n) {
                var a = t && t.prototype instanceof A ? t : A
                  , i = Object.create(a.prototype)
                  , u = new P(n || []);
                return o(i, "_invoke", {
                    value: I(e, r, u)
                }),
                i
            }
            function f(e, t, r) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, r)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            t.wrap = l;
            var d = "suspendedStart"
              , p = "suspendedYield"
              , _ = "executing"
              , E = "completed"
              , b = {};
            function A() {}
            function O() {}
            function y() {}
            var T = {};
            s(T, i, (function() {
                return this
            }
            ));
            var S = Object.getPrototypeOf
              , v = S && S(S(L([])));
            v && v !== r && n.call(v, i) && (T = v);
            var h = y.prototype = A.prototype = Object.create(T);
            function g(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    s(e, t, (function(e) {
                        return this._invoke(t, e)
                    }
                    ))
                }
                ))
            }
            function m(e, t) {
                function r(o, a, i, u) {
                    var c = f(e[o], e, a);
                    if ("throw" !== c.type) {
                        var s = c.arg
                          , l = s.value;
                        return l && "object" == typeof l && n.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                            r("next", e, i, u)
                        }
                        ), (function(e) {
                            r("throw", e, i, u)
                        }
                        )) : t.resolve(l).then((function(e) {
                            s.value = e,
                            i(s)
                        }
                        ), (function(e) {
                            return r("throw", e, i, u)
                        }
                        ))
                    }
                    u(c.arg)
                }
                var a;
                o(this, "_invoke", {
                    value: function(e, n) {
                        function o() {
                            return new t((function(t, o) {
                                r(e, n, t, o)
                            }
                            ))
                        }
                        return a = a ? a.then(o, o) : o()
                    }
                })
            }
            function I(t, r, n) {
                var o = d;
                return function(a, i) {
                    if (o === _)
                        throw Error("Generator is already running");
                    if (o === E) {
                        if ("throw" === a)
                            throw i;
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    for (n.method = a,
                    n.arg = i; ; ) {
                        var u = n.delegate;
                        if (u) {
                            var c = N(u, n);
                            if (c) {
                                if (c === b)
                                    continue;
                                return c
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (o === d)
                                throw o = E,
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        o = _;
                        var s = f(t, r, n);
                        if ("normal" === s.type) {
                            if (o = n.done ? E : p,
                            s.arg === b)
                                continue;
                            return {
                                value: s.arg,
                                done: n.done
                            }
                        }
                        "throw" === s.type && (o = E,
                        n.method = "throw",
                        n.arg = s.arg)
                    }
                }
            }
            function N(t, r) {
                var n = r.method
                  , o = t.iterator[n];
                if (o === e)
                    return r.delegate = null,
                    "throw" === n && t.iterator.return && (r.method = "return",
                    r.arg = e,
                    N(t, r),
                    "throw" === r.method) || "return" !== n && (r.method = "throw",
                    r.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                    b;
                var a = f(o, t.iterator, r.arg);
                if ("throw" === a.type)
                    return r.method = "throw",
                    r.arg = a.arg,
                    r.delegate = null,
                    b;
                var i = a.arg;
                return i ? i.done ? (r[t.resultName] = i.value,
                r.next = t.nextLoc,
                "return" !== r.method && (r.method = "next",
                r.arg = e),
                r.delegate = null,
                b) : i : (r.method = "throw",
                r.arg = new TypeError("iterator result is not an object"),
                r.delegate = null,
                b)
            }
            function C(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function D(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function P(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(C, this),
                this.reset(!0)
            }
            function L(t) {
                if (t || "" === t) {
                    var r = t[i];
                    if (r)
                        return r.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var o = -1
                          , a = function r() {
                            for (; ++o < t.length; )
                                if (n.call(t, o))
                                    return r.value = t[o],
                                    r.done = !1,
                                    r;
                            return r.value = e,
                            r.done = !0,
                            r
                        };
                        return a.next = a
                    }
                }
                throw new TypeError(typeof t + " is not iterable")
            }
            return O.prototype = y,
            o(h, "constructor", {
                value: y,
                configurable: !0
            }),
            o(y, "constructor", {
                value: O,
                configurable: !0
            }),
            O.displayName = s(y, c, "GeneratorFunction"),
            t.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === O || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            t.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y,
                s(e, c, "GeneratorFunction")),
                e.prototype = Object.create(h),
                e
            }
            ,
            t.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            g(m.prototype),
            s(m.prototype, u, (function() {
                return this
            }
            )),
            t.AsyncIterator = m,
            t.async = function(e, r, n, o, a) {
                void 0 === a && (a = Promise);
                var i = new m(l(e, r, n, o),a);
                return t.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                    return e.done ? e.value : i.next()
                }
                ))
            }
            ,
            g(h),
            s(h, c, "Generator"),
            s(h, i, (function() {
                return this
            }
            )),
            s(h, "toString", (function() {
                return "[object Generator]"
            }
            )),
            t.keys = function(e) {
                var t = Object(e)
                  , r = [];
                for (var n in t)
                    r.push(n);
                return r.reverse(),
                function e() {
                    for (; r.length; ) {
                        var n = r.pop();
                        if (n in t)
                            return e.value = n,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            t.values = L,
            P.prototype = {
                constructor: P,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = e,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = e,
                    this.tryEntries.forEach(D),
                    !t)
                        for (var r in this)
                            "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done)
                        throw t;
                    var r = this;
                    function o(n, o) {
                        return u.type = "throw",
                        u.arg = t,
                        r.next = n,
                        o && (r.method = "next",
                        r.arg = e),
                        !!o
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var i = this.tryEntries[a]
                          , u = i.completion;
                        if ("root" === i.tryLoc)
                            return o("end");
                        if (i.tryLoc <= this.prev) {
                            var c = n.call(i, "catchLoc")
                              , s = n.call(i, "finallyLoc");
                            if (c && s) {
                                if (this.prev < i.catchLoc)
                                    return o(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc)
                                    return o(i.finallyLoc)
                            } else if (c) {
                                if (this.prev < i.catchLoc)
                                    return o(i.catchLoc, !0)
                            } else {
                                if (!s)
                                    throw Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc)
                                    return o(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var a = o;
                            break
                        }
                    }
                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                    var i = a ? a.completion : {};
                    return i.type = e,
                    i.arg = t,
                    a ? (this.method = "next",
                    this.next = a.finallyLoc,
                    b) : this.complete(i)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    b
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e)
                            return this.complete(r.completion, r.afterLoc),
                            D(r),
                            b
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                D(r)
                            }
                            return o
                        }
                    }
                    throw Error("illegal catch attempt")
                },
                delegateYield: function(t, r, n) {
                    return this.delegate = {
                        iterator: L(t),
                        resultName: r,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = e),
                    b
                }
            },
            t
        }
        function C() {
            return C = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ,
            C.apply(null, arguments)
        }
        function D(e, t, r, n, o, a, i) {
            try {
                var u = e[a](i)
                  , c = u.value
            } catch (e) {
                return void r(e)
            }
            u.done ? t(c) : Promise.resolve(c).then(n, o)
        }
        function P(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, o, a, i, u = [], c = !0, s = !1;
                    try {
                        if (a = (r = r.call(e)).next,
                        0 === t) {
                            if (Object(r) !== r)
                                return;
                            c = !1
                        } else
                            for (; !(c = (n = a.call(r)).done) && (u.push(n.value),
                            u.length !== t); c = !0)
                                ;
                    } catch (e) {
                        s = !0,
                        o = e
                    } finally {
                        try {
                            if (!c && null != r.return && (i = r.return(),
                            Object(i) !== i))
                                return
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return u
                }
            }(e, t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return L(e, t);
                    var r = {}.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? L(e, t) : void 0
                }
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function L(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function w(e, t, r, n) {
            a || (a = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var o = e && e.defaultProps
              , i = arguments.length - 3;
            if (t || 0 === i || (t = {
                children: void 0
            }),
            1 === i)
                t.children = n;
            else if (i > 1) {
                for (var u = Array(i), c = 0; c < i; c++)
                    u[c] = arguments[c + 3];
                t.children = u
            }
            if (t && o)
                for (var s in o)
                    void 0 === t[s] && (t[s] = o[s]);
            else
                t || (t = o || {});
            return {
                $$typeof: a,
                type: e,
                key: void 0 === r ? null : "" + r,
                ref: null,
                props: t,
                _owner: null
            }
        }
        function M() {
            return "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT + v.Endpoints.APP
        }
        function x() {
            window.location.href = "" + v.AppRoutes.WELCOME
        }
        function k(e) {
            var t, r = e.onOpenInBrowser, n = (0,
            _.default)();
            return i.createElement(i.Fragment, null, w(p.default, {
                className: (0,
                u.default)(g.default.marginTop24, (t = {},
                t[g.default.marginRight24] = n,
                t)),
                color: O.ButtonColors.WHITE,
                analyticsLocation: "Landing Hero"
            }), n ? w(O.default, {
                className: (0,
                u.default)("gtm-click-class-open-button", g.default.marginTop24),
                color: O.ButtonColors.DARK,
                onClick: r,
                "data-testid": "button-open-discord-in-browser"
            }, void 0, h.default.Messages.LANDING_OPEN_DISCORD_IN_BROWSER) : null)
        }
        function U(e) {
            var t = e.hasAcceptedTerms
              , r = e.setHasAcceptedTerms
              , n = (0,
            s.useStateFromStores)([b.default], (function() {
                return b.default.isConsentRequired
            }
            ));
            i.useEffect((function() {
                n || r(!0)
            }
            ), [n, t, r]);
            return n ? w("div", {
                className: g.default.termsContainer
            }, void 0, w(y.default, {
                className: g.default.termsCheckbox,
                id: "terms-checkbox",
                checked: t,
                onChange: function(e) {
                    return r(e.target.checked)
                }
            }), w("label", {
                htmlFor: "terms-checkbox"
            }, void 0, w(T.default, {
                type: T.TextTypes.EXTRA_SMALL,
                className: g.default.termsText
            }, void 0, h.default.Messages.LANDING_TERMS_PRIVACY_OPT_IN.format({
                termsURL: v.WebRoutes.TERMS,
                privacyURL: v.WebRoutes.PRIVACY
            })))) : w("div", {
                className: g.default.termsContainer
            }, void 0, w(T.default, {
                type: T.TextTypes.EXTRA_SMALL,
                className: g.default.termsText
            }, void 0, h.default.Messages.LANDING_TERMS_PRIVACY.format({
                termsURL: v.WebRoutes.TERMS,
                privacyURL: v.WebRoutes.PRIVACY
            })))
        }
        U.displayName = "Terms";
        function j(e) {
            var t, r = e.errors;
            if ("username"in r) {
                var n, a;
                t = null !== (n = null === (a = r.username._errors[0]) || void 0 === a ? void 0 : a.message) && void 0 !== n ? n : "Unknown Error"
            } else
                t = "captcha_key"in r ? null : "message"in r ? r.message : Object.keys(r).map((function(e) {
                    var t;
                    return null === (t = r[e]._errors[0]) || void 0 === t ? void 0 : t.message
                }
                )).filter((function(e) {
                    return null != e
                }
                )).join(", ");
            return null != t && "" !== t ? w("div", {
                className: g.default.errorTooltip
            }, void 0, w("div", {
                className: g.default.error
            }, void 0, w(T.default, {
                type: T.TextTypes.EXTRA_SMALL
            }, void 0, t)), w("svg", {
                width: "16",
                height: "9",
                viewBox: "0 0 16 9",
                className: g.default.__invalid_errorArrow
            }, void 0, o || (o = w("path", {
                d: "M7.99986 9L0.803711 0H15.196L7.99986 9Z",
                fill: "#FFFFFF"
            })))) : null
        }
        function G() {
            var e = P(i.useState(""), 2)
              , t = e[0]
              , o = e[1]
              , a = P(i.useState(!1), 2)
              , s = a[0]
              , p = a[1]
              , _ = P(i.useState(!1), 2)
              , b = _[0]
              , y = _[1]
              , T = P(i.useState({}), 2)
              , m = T[0]
              , I = T[1]
              , N = (0,
            E.useUniqueUsernameRegistrationExperiment)()
              , L = i.useCallback(function() {
                var e, r = (e = R().mark((function e(r, o) {
                    var a, i, u, d, p, _;
                    return R().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (null != t && "" !== t) {
                                    e.next = 3;
                                    break
                                }
                                I({
                                    message: N ? h.default.Messages.LANDING_DISPLAY_NAME_FIELD_REQUIRED : h.default.Messages.LANDING_USERNAME_FIELD_REQUIRED
                                });
                                return e.abrupt("return");
                            case 3:
                                if (s) {
                                    e.next = 6;
                                    break
                                }
                                I({
                                    message: h.default.Messages.LANDING_TERMS_PRIVACY_OPT_IN_TOOLTIP
                                });
                                return e.abrupt("return");
                            case 6:
                                if (!b) {
                                    e.next = 8;
                                    break
                                }
                                return e.abrupt("return");
                            case 8:
                                y(!0);
                                e.prev = 9;
                                a = {};
                                null != r && "" !== r && (a["X-Captcha-Key"] = r);
                                null != o && "" !== o && (a["X-Captcha-Rqtoken"] = o);
                                e.next = 15;
                                return l.HTTP.post({
                                    url: v.Endpoints.REGISTER,
                                    headers: a,
                                    body: C({
                                        consent: s,
                                        fingerprint: f.Storage.get("fingerprint")
                                    }, !N && {
                                        username: t
                                    }, N && {
                                        global_name: t,
                                        unique_username_registration: !0
                                    })
                                });
                            case 15:
                                if ((i = e.sent).ok) {
                                    c.setToken(i.body.token);
                                    S.default.trackEventExternally("CompleteRegistration");
                                    n.nextTick(x)
                                } else {
                                    y(!1);
                                    I(null !== (u = i.body.errors) && void 0 !== u ? u : i.body)
                                }
                                e.next = 23;
                                break;
                            case 19:
                                e.prev = 19;
                                e.t0 = e.catch(9);
                                y(!1);
                                I(null !== (d = null !== (p = null === (_ = e.t0.body) || void 0 === _ ? void 0 : _.errors) && void 0 !== p ? p : e.t0.body) && void 0 !== d ? d : {
                                    message: e.t0.message
                                });
                            case 23:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[9, 19]])
                }
                )),
                function() {
                    var t = this
                      , r = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(t, r);
                        function i(e) {
                            D(a, n, o, i, u, "next", e)
                        }
                        function u(e) {
                            D(a, n, o, i, u, "throw", e)
                        }
                        i(void 0)
                    }
                    ))
                }
                );
                return function(e, t) {
                    return r.apply(this, arguments)
                }
            }(), [t, b, s, N])
              , M = i.useCallback((function(e) {
                e.preventDefault();
                L()
            }
            ), [L]);
            if (function(e) {
                return "captcha_key"in e
            }(m)) {
                var k = function(e) {
                    var t = e.captcha_service
                      , r = e.captcha_sitekey
                      , n = "hcaptcha" === e.captcha_service && !0 === e.should_serve_invisible
                      , o = "hcaptcha" === e.captcha_service && null != e.captcha_rqdata && "" !== e.captcha_rqdata;
                    return {
                        captchaService: t,
                        captchaSitekey: r,
                        captchaRqdata: o ? e.captcha_rqdata : void 0,
                        captchaRqtoken: o ? e.captcha_rqtoken : void 0,
                        shouldServeInvisible: n
                    }
                }(m)
                  , G = k.captchaService
                  , F = k.captchaSitekey
                  , W = k.captchaRqdata
                  , B = k.captchaRqtoken
                  , V = k.shouldServeInvisible;
                return w("div", {
                    className: g.default.formContainer
                }, void 0, V && w(A.default, {
                    itemClassName: g.default.spinnerItem,
                    className: g.default.spinner
                }), w(d.default, {
                    size: V ? "invisible" : void 0,
                    sitekey: F,
                    captchaService: G,
                    onVerify: function(e) {
                        return L(e, B)
                    },
                    rqdata: W,
                    onClose: function() {
                        return I({})
                    },
                    onError: function() {
                        return I({})
                    }
                }))
            }
            return w("div", {
                className: g.default.formContainer
            }, void 0, w("form", {
                className: g.default.form,
                onSubmit: M
            }, void 0, w(j, {
                errors: m
            }), w("input", {
                type: "text",
                className: g.default.username,
                placeholder: N ? h.default.Messages.COMMON_ENTER_DISPLAY_NAME : h.default.Messages.COMMON_ENTER_USERNAME,
                onChange: function(e) {
                    return o(e.target.value)
                },
                value: t,
                autoFocus: !0
            }), w(O.default, {
                className: (0,
                u.default)("gtm-click-class-register-button", g.default.tryButton),
                disabled: b,
                onClick: M,
                title: h.default.Messages.COMMON_SUBMIT
            }, void 0, b ? w(A.default, {
                itemClassName: g.default.spinnerItem,
                className: g.default.spinner
            }) : w("img", {
                className: g.default.arrow,
                src: r(67510),
                alt: ""
            }))), w(U, {
                hasAcceptedTerms: s,
                setHasAcceptedTerms: p
            }))
        }
        G.displayName = "TryDiscord";
        function F(e) {
            var t = e.setShowUnclaimedInput
              , r = P(i.useState(null), 2)
              , n = r[0]
              , o = r[1];
            i.useEffect((function() {
                o(c.getToken())
            }
            ), []);
            var a = i.useCallback((function() {
                S.default.track(v.WebAnalyticsEvents.CLICK_LANDING_CTA, C({
                    buttonstate: null != n ? "has session" : "no session"
                }, S.default.getStaticExperimentAttributes()));
                if (null != n) {
                    S.default.trackOutboundLink(M());
                    window.location.href = M()
                } else {
                    t(!0);
                    S.default.trackEventExternally("BeginRegistration")
                }
            }
            ), [t, n]);
            return w("div", {
                className: g.default.ctaContainer
            }, void 0, w(k, {
                onOpenInBrowser: a
            }))
        }
        F.displayName = "DownloadOrTry";
        function W() {
            var e = P(i.useState(!1), 2)
              , t = e[0]
              , r = e[1]
              , n = P(i.useState(!1), 2)
              , o = n[0]
              , a = n[1]
              , u = P(i.useState("en-US"), 2)
              , c = u[0]
              , s = u[1]
              , l = P(i.useState(null), 2)
              , f = l[0]
              , d = l[1];
            i.useEffect((function() {
                f !== h.default.loadPromise && function() {
                    var e = h.default.loadPromise;
                    if (e !== f) {
                        d(e);
                        a(!1);
                        e.then((function() {
                            a(!0);
                            s(h.default.getLocale())
                        }
                        )).catch((function(e) {
                            throw new Error("Failed to load locale: " + e)
                        }
                        ))
                    }
                }()
            }
            ), [f]);
            return t ? w(G, {}, c + "+" + o) : w(F, {
                setShowUnclaimedInput: r
            }, c + "+" + o)
        }
        W.displayName = "CTA"
    }
    ,
    53045: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = void 0;
        var n = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = i(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && {}.hasOwnProperty.call(e, a)) {
                    var u = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    u && (u.get || u.set) ? Object.defineProperty(n, a, u) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }(r(70079))
          , o = r(41779)
          , a = ["tag", "onClick", "onKeyDown", "role"];
        function i(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (i = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function u() {
            return u = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ,
            u.apply(null, arguments)
        }
        function c(e, t) {
            return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            c(e, t)
        }
        var s = function(e) {
            function t() {
                for (var t, r = arguments.length, n = new Array(r), a = 0; a < r; a++)
                    n[a] = arguments[a];
                (t = e.call.apply(e, [this].concat(n)) || this).handleKeyPress = function(e) {
                    var r = t.props
                      , n = r.onClick
                      , a = r.href
                      , i = r.onKeyPress;
                    if (null != n && null != t.ref && (e.charCode === o.KeyboardKeyCodes.SPACE || e.charCode === o.KeyboardKeyCodes.ENTER)) {
                        null == a && e.preventDefault();
                        t.ref.click()
                    }
                    null != i && i(e)
                }
                ;
                t.setRef = function(e) {
                    t.ref = e
                }
                ;
                return t
            }
            i = e,
            (r = t).prototype = Object.create(i.prototype),
            r.prototype.constructor = r,
            c(r, i);
            var r, i;
            t.prototype.render = function() {
                var e = this.props
                  , t = e.tag
                  , r = e.onClick
                  , o = e.onKeyDown
                  , i = e.role
                  , c = function(e, t) {
                    if (null == e)
                        return {};
                    var r = {};
                    for (var n in e)
                        if ({}.hasOwnProperty.call(e, n)) {
                            if (t.includes(n))
                                continue;
                            r[n] = e[n]
                        }
                    return r
                }(e, a);
                return null == r ? n.createElement(t, c) : n.createElement(t, u({
                    tabIndex: 0
                }, c, {
                    onClick: r,
                    ref: this.setRef,
                    onKeyPress: this.handleKeyPress,
                    onKeyDown: o,
                    role: null != i ? i : "button"
                }))
            }
            ;
            return t
        }(n.Component);
        s.defaultProps = {
            tag: "div"
        };
        s.displayName = "Clickable";
        t.default = s
    }
    ,
    61578: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = t.SpinnerTypes = void 0;
        var n, o = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = l(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && {}.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }(r(70079)), a = s(r(3997)), i = r(39280), u = s(r(88911)), c = ["type", "className", "itemClassName"];
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function l(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (l = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function f() {
            return f = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ,
            f.apply(null, arguments)
        }
        function d(e, t, r, o) {
            n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var a = e && e.defaultProps
              , i = arguments.length - 3;
            if (t || 0 === i || (t = {
                children: void 0
            }),
            1 === i)
                t.children = o;
            else if (i > 1) {
                for (var u = Array(i), c = 0; c < i; c++)
                    u[c] = arguments[c + 3];
                t.children = u
            }
            if (t && a)
                for (var s in a)
                    void 0 === t[s] && (t[s] = a[s]);
            else
                t || (t = a || {});
            return {
                $$typeof: n,
                type: e,
                key: void 0 === r ? null : "" + r,
                ref: null,
                props: t,
                _owner: null
            }
        }
        var p = t.SpinnerTypes = function(e) {
            e.WANDERING_CUBES = "wanderingCubes";
            e.CHASING_DOTS = "chasingDots";
            e.PULSING_ELLIPSIS = "pulsingEllipsis";
            e.SPINNING_CIRCLE = "spinningCircle";
            return e
        }({})
          , _ = function(e) {
            var t = e.type
              , r = void 0 === t ? p.WANDERING_CUBES : t
              , n = e.className
              , s = e.itemClassName
              , l = function(e, t) {
                if (null == e)
                    return {};
                var r = {};
                for (var n in e)
                    if ({}.hasOwnProperty.call(e, n)) {
                        if (t.includes(n))
                            continue;
                        r[n] = e[n]
                    }
                return r
            }(e, c);
            if (r === p.SPINNING_CIRCLE)
                return o.createElement("div", f({
                    className: (0,
                    a.default)(u.default.spinner, u.default[r], n)
                }, l), d("div", {
                    className: u.default.spinningCircleInner
                }, void 0, d("svg", {
                    className: u.default.circular,
                    viewBox: "25 25 50 50"
                }, void 0, d("circle", {
                    className: (0,
                    a.default)(u.default.path, u.default.path3),
                    cx: "50",
                    cy: "50",
                    r: "20"
                }), d("circle", {
                    className: (0,
                    a.default)(u.default.path, u.default.path2),
                    cx: "50",
                    cy: "50",
                    r: "20"
                }), d("circle", {
                    className: u.default.path,
                    cx: "50",
                    cy: "50",
                    r: "20"
                }))));
            var _ = (0,
            a.default)((0,
            i.getClass)(u.default, r, "item"), s);
            return o.createElement("span", f({
                className: (0,
                a.default)(u.default.spinner, n)
            }, l), d("span", {
                className: (0,
                a.default)(u.default.inner, u.default[r])
            }, void 0, d("span", {
                className: _
            }), d("span", {
                className: _
            }), r === p.PULSING_ELLIPSIS ? d("span", {
                className: _
            }) : null))
        };
        _.displayName = "Spinner";
        _.Type = p;
        t.default = _
    }
    ,
    40634: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = void 0;
        var n, o, a;
        !function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = i(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && {}.hasOwnProperty.call(e, a)) {
                    var u = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    u && (u.get || u.set) ? Object.defineProperty(n, a, u) : n[a] = e[a]
                }
            n.default = e,
            r && r.set(e, n)
        }(r(70079));
        function i(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (i = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function u(e, t, r, n) {
            a || (a = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var o = e && e.defaultProps
              , i = arguments.length - 3;
            if (t || 0 === i || (t = {
                children: void 0
            }),
            1 === i)
                t.children = n;
            else if (i > 1) {
                for (var u = Array(i), c = 0; c < i; c++)
                    u[c] = arguments[c + 3];
                t.children = u
            }
            if (t && o)
                for (var s in o)
                    void 0 === t[s] && (t[s] = o[s]);
            else
                t || (t = o || {});
            return {
                $$typeof: a,
                type: e,
                key: void 0 === r ? null : "" + r,
                ref: null,
                props: t,
                _owner: null
            }
        }
        t.default = function(e) {
            var t = e.width
              , r = void 0 === t ? 24 : t
              , a = e.height
              , i = void 0 === a ? 24 : a
              , c = e.color
              , s = void 0 === c ? "currentColor" : c;
            return u("svg", {
                width: r,
                height: i,
                viewBox: "0 0 24 24",
                className: e.className
            }, void 0, u("g", {
                fill: s,
                className: e.foreground
            }, void 0, n || (n = u("path", {
                d: "M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"
            })), o || (o = u("path", {
                d: "M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"
            }))))
        }
    }
    ,
    52618: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.ButtonSizes = t.ButtonColors = void 0;
        t.LinkButton = T;
        t.default = void 0;
        var n, o, a = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = p(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && {}.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }(r(70079)), i = d(r(3997)), u = r(82821), c = d(r(61834)), s = d(r(65231)), l = ["color", "size", "className", "children", "disabled"], f = ["color", "size", "className", "children", "external", "href", "onClick", "analyticsLocation"];
        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function p(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (p = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function _() {
            return _ = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ,
            _.apply(null, arguments)
        }
        function E(e, t) {
            if (null == e)
                return {};
            var r = {};
            for (var n in e)
                if ({}.hasOwnProperty.call(e, n)) {
                    if (t.includes(n))
                        continue;
                    r[n] = e[n]
                }
            return r
        }
        var b = t.ButtonColors = function(e) {
            e[e.BRAND = 0] = "BRAND";
            e[e.WHITE = 1] = "WHITE";
            e[e.DARK = 2] = "DARK";
            return e
        }({})
          , A = t.ButtonSizes = function(e) {
            e[e.LARGE = 0] = "LARGE";
            e[e.SMALL = 1] = "SMALL";
            e[e.SMALL_NESTED = 2] = "SMALL_NESTED";
            return e
        }({})
          , O = ((n = {})[b.WHITE] = s.default.buttonWhite,
        n[b.DARK] = s.default.buttonDark,
        n[b.BRAND] = s.default.buttonBrand,
        n)
          , y = ((o = {})[A.LARGE] = s.default.buttonLarge,
        o[A.SMALL] = s.default.buttonSmall,
        o[A.SMALL_NESTED] = s.default.buttonSmallNested,
        o);
        t.default = a.forwardRef((function(e, t) {
            var r, n = e.color, o = void 0 === n ? b.BRAND : n, u = e.size, c = void 0 === u ? A.LARGE : u, f = e.className, d = e.children, p = e.disabled, T = E(e, l);
            return a.createElement("button", _({
                ref: t,
                className: (0,
                i.default)(s.default.button, O[o], y[c], (r = {},
                r[s.default.disabled] = p,
                r), f),
                disabled: p
            }, T), d)
        }
        ));
        function T(e) {
            var t = e.color
              , r = void 0 === t ? b.BRAND : t
              , n = e.size
              , o = void 0 === n ? A.LARGE : n
              , l = e.className
              , d = e.children
              , p = e.external
              , T = void 0 === p || p
              , S = e.href
              , v = e.onClick
              , h = e.analyticsLocation
              , g = E(e, f);
            if (!T)
                return a.createElement(u.Link, _({
                    className: (0,
                    i.default)(s.default.button, O[r], y[o], l),
                    to: {
                        pathname: S,
                        state: {
                            previousLinkLocation: h
                        }
                    }
                }, g), d);
            return a.createElement("a", _({
                className: (0,
                i.default)(s.default.button, O[r], y[o], l),
                href: S,
                onClick: function(e) {
                    null == v || v(e);
                    null != S && c.default.trackOutboundLink(S, !1)
                }
            }, g), d)
        }
        T.displayName = "LinkButton"
    }
    ,
    38061: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.CheckboxTypes = void 0;
        t.default = y;
        var n, o, a, i, u = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = p(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && {}.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }(r(70079)), c = d(r(3997)), s = d(r(53045)), l = d(r(59593)), f = ["id", "type", "className", "checked", "onChange"];
        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function p(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (p = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function _() {
            return _ = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ,
            _.apply(null, arguments)
        }
        function E(e, t, r, n) {
            i || (i = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var o = e && e.defaultProps
              , a = arguments.length - 3;
            if (t || 0 === a || (t = {
                children: void 0
            }),
            1 === a)
                t.children = n;
            else if (a > 1) {
                for (var u = Array(a), c = 0; c < a; c++)
                    u[c] = arguments[c + 3];
                t.children = u
            }
            if (t && o)
                for (var s in o)
                    void 0 === t[s] && (t[s] = o[s]);
            else
                t || (t = o || {});
            return {
                $$typeof: i,
                type: e,
                key: void 0 === r ? null : "" + r,
                ref: null,
                props: t,
                _owner: null
            }
        }
        var b = t.CheckboxTypes = function(e) {
            e[e.BRAND_LIGHT = 0] = "BRAND_LIGHT";
            return e
        }({})
          , A = ((n = {})[b.BRAND_LIGHT] = l.default.brandLight,
        n);
        function O() {
            return o || (o = E("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, void 0, E("path", {
                d: "M5.95745 14L0 9L1.78723 6.33333L5.3617 9.33333L11.617 0L14 2L5.95745 14Z",
                fill: "#7289DA"
            })))
        }
        O.displayName = "Checkmark";
        function y(e) {
            var t = e.id
              , r = e.type
              , n = void 0 === r ? b.BRAND_LIGHT : r
              , o = e.className
              , i = e.checked
              , d = e.onChange
              , p = function(e, t) {
                if (null == e)
                    return {};
                var r = {};
                for (var n in e)
                    if ({}.hasOwnProperty.call(e, n)) {
                        if (t.includes(n))
                            continue;
                        r[n] = e[n]
                    }
                return r
            }(e, f)
              , y = u.useRef(null)
              , T = u.useCallback((function() {
                var e;
                null === (e = y.current) || void 0 === e || e.click()
            }
            ), [y]);
            return E(s.default, {
                className: (0,
                c.default)(l.default.container, A[n], o),
                onClick: T
            }, void 0, u.createElement("input", _({
                id: t,
                type: "checkbox",
                ref: y,
                className: l.default.input
            }, p, {
                checked: i,
                onChange: d
            })), E("div", {
                className: l.default.checkbox
            }, void 0, i && (a || (a = E(O, {})))))
        }
        y.displayName = "Checkbox"
    }
    ,
    53132: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.TextTypes = void 0;
        t.default = p;
        var n, o = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = s(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && {}.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }(r(70079)), a = c(r(3997)), i = c(r(85736)), u = ["tag", "type", "className", "children"];
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function s(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (s = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function l() {
            return l = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ,
            l.apply(null, arguments)
        }
        var f = t.TextTypes = function(e) {
            e[e.LARGE = 0] = "LARGE";
            e[e.MEDIUM = 1] = "MEDIUM";
            e[e.SMALL = 2] = "SMALL";
            e[e.EXTRA_SMALL = 3] = "EXTRA_SMALL";
            e[e.LABEL = 4] = "LABEL";
            return e
        }({})
          , d = ((n = {})[f.LARGE] = i.default.textLarge,
        n[f.MEDIUM] = i.default.textMedium,
        n[f.SMALL] = i.default.textSmall,
        n[f.EXTRA_SMALL] = i.default.textExtraSmall,
        n[f.LABEL] = i.default.textLabel,
        n);
        function p(e) {
            var t = e.tag
              , r = void 0 === t ? "div" : t
              , n = e.type
              , c = void 0 === n ? f.MEDIUM : n
              , s = e.className
              , p = e.children
              , _ = function(e, t) {
                if (null == e)
                    return {};
                var r = {};
                for (var n in e)
                    if ({}.hasOwnProperty.call(e, n)) {
                        if (t.includes(n))
                            continue;
                        r[n] = e[n]
                    }
                return r
            }(e, u);
            return o.createElement(r, l({
                className: (0,
                a.default)(i.default.text, d[c], s)
            }, _), p)
        }
        p.displayName = "Text"
    }
    ,
    39280: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.getClass = void 0;
        var n = r(70074);
        t.getClass = n.getClass
    }
    ,
    49856: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function() {
            var e = document.getElementById("landing-cta");
            null != e && (0,
            i.createRoot)(e).render(o || (o = s(u.default, {})))
        }
        ;
        !function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = c(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && {}.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
            n.default = e,
            r && r.set(e, n)
        }(r(70079));
        var n, o, a, i = r(2226), u = (n = r(92483)) && n.__esModule ? n : {
            default: n
        };
        function c(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (c = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function s(e, t, r, n) {
            a || (a = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var o = e && e.defaultProps
              , i = arguments.length - 3;
            if (t || 0 === i || (t = {
                children: void 0
            }),
            1 === i)
                t.children = n;
            else if (i > 1) {
                for (var u = Array(i), c = 0; c < i; c++)
                    u[c] = arguments[c + 3];
                t.children = u
            }
            if (t && o)
                for (var s in o)
                    void 0 === t[s] && (t[s] = o[s]);
            else
                t || (t = o || {});
            return {
                $$typeof: a,
                type: e,
                key: void 0 === r ? null : "" + r,
                ref: null,
                props: t,
                _owner: null
            }
        }
    }
    ,
    48286: (e, t, r) => {
        e.exports = r.p + "9c38ca7c8efaed0c58149217515ea19f.png"
    }
    ,
    99966: (e, t, r) => {
        e.exports = r.p + "b95bb7efeb438fa41f68b518326ab10a.jpg"
    }
    ,
    86181: (e, t, r) => {
        e.exports = r.p + "bd49a6692990a5f727b7c011409cfd64.jpg"
    }
    ,
    21643: (e, t, r) => {
        e.exports = r.p + "3aa728e8dfe23d3f91cd3dc68294a43c.jpg"
    }
    ,
    58199: (e, t, r) => {
        e.exports = r.p + "7769865ef27ad2aadd7130d8340cf78f.jpg"
    }
    ,
    81976: (e, t, r) => {
        e.exports = r.p + "652edd04d25aad621b6f331d1fa1c1a3.jpg"
    }
    ,
    19346: (e, t, r) => {
        e.exports = r.p + "a6720db267e8799c3f2f95ab0a73487e.jpg"
    }
    ,
    64433: (e, t, r) => {
        e.exports = r.p + "683fe6267bcdcee43876df0b6e404876.jpg"
    }
    ,
    98777: (e, t, r) => {
        e.exports = r.p + "1f0bfc0865d324c2587920a7d80c609b.png"
    }
    ,
    32154: (e, t, r) => {
        e.exports = r.p + "c09a43a372ba81e3018c3151d4ed4773.png"
    }
    ,
    91753: (e, t, r) => {
        e.exports = r.p + "7c8f476123d28d103efe381543274c25.png"
    }
    ,
    12142: (e, t, r) => {
        e.exports = r.p + "6f26ddd1bf59740c536d2274bb834a05.png"
    }
    ,
    4375: (e, t, r) => {
        e.exports = r.p + "3c6ccb83716d1e4fb91d3082f6b21d77.png"
    }
    ,
    73765: (e, t, r) => {
        e.exports = r.p + "4c1b599b1ef5b9f1874fdb9933f3e03b.png"
    }
    ,
    40624: (e, t, r) => {
        e.exports = r.p + "851495b197302ca0b6ad540e12d27682.png"
    }
    ,
    47756: (e, t, r) => {
        e.exports = r.p + "be91d88c1184c1d2da7dc184701a9405.png"
    }
    ,
    91908: (e, t, r) => {
        e.exports = r.p + "9ba7d85b3bf5a797f56b9e0ee712ce17.png"
    }
    ,
    75722: (e, t, r) => {
        e.exports = r.p + "4bf3887f6ceb0552e88356eefa49b50e.png"
    }
    ,
    93112: (e, t, r) => {
        e.exports = r.p + "e43129aff7003480ae18bd0c7bdbfe1e.png"
    }
    ,
    44917: (e, t, r) => {
        e.exports = r.p + "886cdea4e9dacd8227b2e8b1a5e456cb.png"
    }
    ,
    20448: (e, t, r) => {
        e.exports = r.p + "10b7e0b465da7bde34140df25edcc3c7.png"
    }
    ,
    93661: (e, t, r) => {
        e.exports = r.p + "192cb9459cbc0f9e73e2591b700f1857.svg"
    }
    ,
    50634: (e, t, r) => {
        e.exports = r.p + "1c8a54f25d101bdc607cec7228247a9a.svg"
    }
    ,
    73544: (e, t, r) => {
        e.exports = r.p + "2d20a45d79110dc5bf947137e9d99b66.svg"
    }
    ,
    12800: (e, t, r) => {
        e.exports = r.p + "182b1c095f120709f831c55ed192d3c1.svg"
    }
    ,
    65964: (e, t, r) => {
        e.exports = r.p + "b0a6c5f555b86f9b368733aa50f8eb67.svg"
    }
    ,
    67510: (e, t, r) => {
        e.exports = r.p + "cd784686ed3f8081f9ffd2ebca329a5b.svg"
    }
    ,
    93472: (e, t, r) => {
        e.exports = r.p + "d7c192d71a78c659b9f5de810e6e85d8.svg"
    }
    ,
    39669: (e, t, r) => {
        e.exports = r.p + "d3372bee54a72b0651b712250a719a5b.svg"
    }
    ,
    96579: (e, t, r) => {
        e.exports = r.p + "3500ab9143d30d8acb6e40361cf30494.svg"
    }
    ,
    41941: (e, t, r) => {
        e.exports = r.p + "fbeecd9630673fad538917f2c33a8f62.svg"
    }
    ,
    74969: (e, t, r) => {
        e.exports = r.p + "7802f24afe58bfbf4cfd3a9e4b210f15.svg"
    }
    ,
    22448: (e, t, r) => {
        e.exports = r.p + "48930d53ee497513a0ee4c3c1ae7b3cb.svg"
    }
    ,
    6193: (e, t, r) => {
        e.exports = r.p + "aaef6e9afb93f4a28236410b0d7376ca.svg"
    }
    ,
    48522: (e, t, r) => {
        e.exports = r.p + "d0d4785a2a708e2e6aae274cbe13cb6c.svg"
    }
    ,
    44446: (e, t, r) => {
        e.exports = r.p + "06ea560c1e44daa597f3884695915e22.svg"
    }
    ,
    53503: (e, t, r) => {
        e.exports = r.p + "024ae98624f8e367008a4c36083db9ce.svg"
    }
    ,
    84332: (e, t, r) => {
        e.exports = r.p + "1bb7926a45299901fde33786b53ab69d.svg"
    }
    ,
    49096: (e, t, r) => {
        e.exports = r.p + "e2a6f8171e62d5e5ccf758c23dcb89fe.svg"
    }
    ,
    42059: (e, t, r) => {
        e.exports = r.p + "7ff740cf6ffa866433b795533dac3461.svg"
    }
    ,
    53020: (e, t, r) => {
        e.exports = r.p + "b1b2c24cafa7060d239b6b4e3341b762.png"
    }
    ,
    70124: (e, t, r) => {
        e.exports = r.p + "fdf6bd4613657c3692558d7cc38b8132.png"
    }
    ,
    69007: (e, t, r) => {
        e.exports = r.p + "6dcf185a8e7242fbcefb62205b9c6983.png"
    }
    ,
    60023: (e, t, r) => {
        e.exports = r.p + "784caa3aa984dff713bb3a61163a6042.png"
    }
    ,
    13257: (e, t, r) => {
        e.exports = r.p + "22dd57f15c73057713a90234b81b989b.png"
    }
    ,
    15685: (e, t, r) => {
        e.exports = r.p + "888e6c09eafed0a21e51bd5d76242c29.svg"
    }
    ,
    90023: (e, t, r) => {
        e.exports = r.p + "622261c6e6a21b11ecac0a5fb7f13a28.png"
    }
    ,
    48408: (e, t, r) => {
        e.exports = r.p + "1f62022125f33f46bc9326133d378df0.png"
    }
    ,
    50321: (e, t, r) => {
        e.exports = r.p + "7acd9c2ff70f23eb9e54571c048b6b31.png"
    }
    ,
    18834: (e, t, r) => {
        e.exports = r.p + "2a090820ee884bf88fccc3cc5e3e6a3b.png"
    }
    ,
    76903: (e, t, r) => {
        e.exports = r.p + "a3249c4d95ec10b506d16f3cead1fb29.png"
    }
    ,
    16903: (e, t, r) => {
        e.exports = r.p + "b61c352bd5203998bdd576d473f70c8e.png"
    }
    ,
    76563: (e, t, r) => {
        e.exports = r.p + "f35de8ceb4c7be0466509e067b5209a6.svg"
    }
    ,
    59475: (e, t, r) => {
        e.exports = r.p + "5c8a0eea53ae23a427b61fdb1a2487b6.svg"
    }
    ,
    75189: (e, t, r) => {
        e.exports = r.p + "a7fb8707e004a750e7bf5a6172c14b6e.jpg"
    }
    ,
    22417: (e, t, r) => {
        e.exports = r.p + "7b520435cca2b2d7d55117323e73884e.jpg"
    }
    ,
    58438: (e, t, r) => {
        e.exports = r.p + "6e6a55d52223b4fba9302604e897e15f.jpg"
    }
    ,
    88041: (e, t, r) => {
        e.exports = r.p + "adc1f4d3c4c67a376a6cb055eef97f39.jpg"
    }
    ,
    92162: (e, t, r) => {
        e.exports = r.p + "1adaa54b8279d89cc4438f1d3d1cfe8f.jpg"
    }
    ,
    66551: (e, t, r) => {
        e.exports = r.p + "e96938863276afe14ba87383bff26b87.jpg"
    }
    ,
    59531: (e, t, r) => {
        e.exports = r.p + "6f12555eaf113a06cd0d5689a7e93a41.jpg"
    }
    ,
    9906: (e, t, r) => {
        e.exports = r.p + "157083b6c30ce511c34653049b8ac0e1.jpg"
    }
    ,
    79528: (e, t, r) => {
        e.exports = r.p + "ce79c7b65bb8d935eb9f9ab30ffbf22d.jpg"
    }
    ,
    50156: (e, t, r) => {
        e.exports = r.p + "629c4fa1cfc1c4fc5c5af1f41b95cec1.jpg"
    }
    ,
    50150: (e, t, r) => {
        e.exports = r.p + "14cf284f1f64ba245176db7bfaab8151.jpg"
    }
    ,
    50127: (e, t, r) => {
        e.exports = r.p + "348f4e3be923194b354cbd36d5466622.jpg"
    }
    ,
    57645: (e, t, r) => {
        e.exports = r.p + "f06545cfdc37d797ee46902b8916c6cd.jpg"
    }
    ,
    567: (e, t, r) => {
        e.exports = r.p + "417633f0198c1c33285610e7978a13b7.jpg"
    }
    ,
    566: (e, t, r) => {
        e.exports = r.p + "72377f1b6798f93d781ccd434d3b7a67.jpg"
    }
    ,
    5609: (e, t, r) => {
        e.exports = r.p + "4e02c7c5f23caa526b88ec7aafd3e946.jpg"
    }
    ,
    29558: (e, t, r) => {
        e.exports = r.p + "2101ed4e97dfcb6d27b2118e24f14ef9.jpg"
    }
    ,
    75234: (e, t, r) => {
        e.exports = r.p + "450bee0b2b2d76d0fb4d6d4402be550e.jpg"
    }
    ,
    33324: (e, t, r) => {
        e.exports = r.p + "50e27582392120f287d72cea89439e57.jpg"
    }
    ,
    96115: (e, t, r) => {
        e.exports = r.p + "65806a913de66226ccd682d70a449c34.jpg"
    }
    ,
    90302: (e, t, r) => {
        e.exports = r.p + "77a69e62fd7923c451055a331a344ce8.jpg"
    }
    ,
    59084: (e, t, r) => {
        e.exports = r.p + "c0faca543f786ba5a07525d1c7cfb59a.jpg"
    }
    ,
    11577: (e, t, r) => {
        e.exports = r.p + "fcb005cddb4db0d66ec9ff895bf49c5e.jpg"
    }
    ,
    52343: (e, t, r) => {
        e.exports = r.p + "3d8a4656ec4a53c252e51367c7ae804e.jpg"
    }
    ,
    54870: (e, t, r) => {
        e.exports = r.p + "67a543c06c0290e83183d04177746dcf.jpg"
    }
    ,
    71763: (e, t, r) => {
        e.exports = r.p + "1e18009568e2efced7cd7c09160b1b57.jpg"
    }
    ,
    85233: (e, t, r) => {
        e.exports = r.p + "458339747f3bc3779e7c710184838dee.jpg"
    }
    ,
    43164: (e, t, r) => {
        e.exports = r.p + "378d810417e09070e5e5014d6472f2e4.jpg"
    }
    ,
    29455: (e, t, r) => {
        e.exports = r.p + "e6787bf9f04173c31afddad8836bc44e.jpg"
    }
    ,
    23136: (e, t, r) => {
        e.exports = r.p + "1ea4f69e47c15512b25c20136b17c2b4.jpg"
    }
    ,
    64035: (e, t, r) => {
        e.exports = r.p + "c20cc1c85b0b1822a2b34f03c228db9c.jpg"
    }
    ,
    74620: (e, t, r) => {
        e.exports = r.p + "cf965a62d5841e02e2cf0151a6a99ed9.jpg"
    }
    ,
    91947: (e, t, r) => {
        e.exports = r.p + "c97b39d645fa53ffd4efd9f9f84e2398.jpg"
    }
    ,
    46113: (e, t, r) => {
        e.exports = r.p + "fc997230a71973e759f225a2e82e95ef.jpg"
    }
    ,
    91566: (e, t, r) => {
        e.exports = r.p + "89bc1342f8b843295fb7a174ea201ca1.png"
    }
    ,
    27686: (e, t, r) => {
        e.exports = r.p + "dd9f972ba06bc29f4e756091e2fc9812.svg"
    }
    ,
    81351: (e, t, r) => {
        e.exports = r.p + "575a0322f3b36ca2fecb23ad2c6dd5ad.svg"
    }
    ,
    75111: (e, t, r) => {
        e.exports = r.p + "46b2132c01604c9493d558de444929f4.svg"
    }
    ,
    30777: (e, t, r) => {
        e.exports = r.p + "98ea5b9e92e304c7d352ac462996adc5.svg"
    }
    ,
    94140: (e, t, r) => {
        e.exports = r.p + "b941bc1dfe379db6cc1f2acc5a612f41.png"
    }
    ,
    88290: (e, t, r) => {
        e.exports = r.p + "cb436e22ed18484e04f3e6002e407de9.svg"
    }
    ,
    79947: (e, t, r) => {
        e.exports = r.p + "d3e19db7390a2d1afbe895b73c4d253c.svg"
    }
    ,
    65659: (e, t, r) => {
        e.exports = r.p + "13dcff023c269109f1f2eb1d8baaf765.svg"
    }
    ,
    25630: (e, t, r) => {
        e.exports = r.p + "9d51aef4c57689e5f78f1124485f6eb9.svg"
    }
    ,
    53950: (e, t, r) => {
        e.exports = r.p + "90e17f43426c2411b47906831576deaf.png"
    }
    ,
    62131: (e, t, r) => {
        e.exports = r.p + "ff5b4f3466b1e217ba845ce0540da563.png"
    }
    ,
    79020: (e, t, r) => {
        e.exports = r.p + "a85c1e61d72e1236b440a8b3abf4263d.svg"
    }
    ,
    9093: (e, t, r) => {
        e.exports = r.p + "c0da27d3ae69e4c0544f9d7b11319170.svg"
    }
    ,
    83942: (e, t, r) => {
        e.exports = r.p + "1f4a4af827e31434fe29b8bc36c2513c.svg"
    }
    ,
    69247: (e, t, r) => {
        e.exports = r.p + "652f40427e1f5186ad54836074898279.png"
    }
    ,
    72415: (e, t, r) => {
        e.exports = r.p + "44e995c0944fe3fab1282912827d1863.png"
    }
    ,
    78955: (e, t, r) => {
        e.exports = r.p + "de3f9ed09a90681aad6c251446fa56e6.png"
    }
    ,
    53779: (e, t, r) => {
        e.exports = r.p + "178b75be21475f9936a98e195002f6d8.png"
    }
    ,
    59037: (e, t, r) => {
        e.exports = r.p + "adea415f8c40e26284e9d17d9332b024.png"
    }
    ,
    89826: (e, t, r) => {
        e.exports = r.p + "c718f36817f1324004d76909b2c9e7a2.png"
    }
    ,
    33182: (e, t, r) => {
        e.exports = r.p + "9e542640f7905f296f22eac5e821a64f.png"
    }
    ,
    85058: (e, t, r) => {
        e.exports = r.p + "85b8d72c2fd9069516bf0e2aaba274ef.png"
    }
    ,
    38168: (e, t, r) => {
        e.exports = r.p + "a84a22183f0d18e0e46cbc704b696cec.png"
    }
    ,
    25248: (e, t, r) => {
        e.exports = r.p + "0be0f4fec9382e7433365316aef2c848.png"
    }
    ,
    5377: (e, t, r) => {
        e.exports = r.p + "a73b8ff962a8d7de6769e9d892b38c98.png"
    }
    ,
    71773: (e, t, r) => {
        e.exports = r.p + "8d6caf54ad0a6cbec9a70aba43f3b6c9.svg"
    }
    ,
    51141: (e, t, r) => {
        e.exports = r.p + "959a6e61c53396b151dd262359afd692.svg"
    }
    ,
    52714: (e, t, r) => {
        e.exports = r.p + "136463c33041afef186dd77580841bd8.svg"
    }
    ,
    50285: (e, t, r) => {
        e.exports = r.p + "a46066d8d059e88674c9eb409f589aec.svg"
    }
    ,
    23711: (e, t, r) => {
        e.exports = r.p + "26cbcc2fd8cfe3d7a5d7e8b54c831486.svg"
    }
    ,
    83924: (e, t, r) => {
        e.exports = r.p + "31bbe0e6f5b5022fedc03e02afa6753d.svg"
    }
    ,
    76765: (e, t, r) => {
        e.exports = r.p + "28d81b988068375563daf0e9dce49535.svg"
    }
    ,
    99638: (e, t, r) => {
        e.exports = r.p + "f512c03ded7ce81bcdfe23f54e522635.svg"
    }
    ,
    16585: (e, t, r) => {
        e.exports = r.p + "4bcfcce69b9ff94d5d5f0f1370abf405.svg"
    }
    ,
    51413: (e, t, r) => {
        e.exports = r.p + "d3487ac869e2301b4e5fc8b455d4b655.svg"
    }
    ,
    89073: (e, t, r) => {
        e.exports = r.p + "a28b7f0e1f806f8bb7522d9baaa9fba1.svg"
    }
    ,
    60755: (e, t, r) => {
        e.exports = r.p + "2182b390454b9e99bf076b9d86282bfc.svg"
    }
    ,
    48321: (e, t, r) => {
        e.exports = r.p + "b93cecff591660d0bdbf31fba1ff995b.svg"
    }
    ,
    80187: (e, t, r) => {
        e.exports = r.p + "4027d362095056a9fc5d95aff891c00b.svg"
    }
    ,
    88620: (e, t, r) => {
        e.exports = r.p + "cd0934d60fdbeb9539af62f2cb90980b.svg"
    }
    ,
    55392: (e, t, r) => {
        e.exports = r.p + "6992471ed1d151214a7ff575b88a9d34.svg"
    }
    ,
    30517: (e, t, r) => {
        e.exports = r.p + "447ba0e3c330475ce22cfed830a465ce.svg"
    }
    ,
    63638: (e, t, r) => {
        e.exports = r.p + "0e030cb09a13a3cb53de66907733bf16.svg"
    }
    ,
    66706: (e, t, r) => {
        e.exports = r.p + "e9be0be34ce2cffeb0c26ba338a12f2e.svg"
    }
    ,
    67068: (e, t, r) => {
        e.exports = r.p + "204c22933d9d2c7e872e7df310024a7c.svg"
    }
    ,
    1846: (e, t, r) => {
        e.exports = r.p + "2e80cad2a55df365bdae5eb0263d13a7.gif"
    }
    ,
    16351: (e, t, r) => {
        e.exports = r.p + "d41e268af39bd30204f8f3a77d83b740.png"
    }
    ,
    54910: (e, t, r) => {
        e.exports = r.p + "65da1ed4cd70e5017ff9a8cc0613d4e5.png"
    }
    ,
    29790: (e, t, r) => {
        e.exports = r.p + "650e842fcff5bb71fd1b68465040bee1.png"
    }
    ,
    73372: (e, t, r) => {
        e.exports = r.p + "15dd1a232aa2efaf051e6b268b96d963.png"
    }
    ,
    88308: (e, t, r) => {
        e.exports = r.p + "b1f46a51464a7c0403aa06be1eee00d1.png"
    }
    ,
    52396: (e, t, r) => {
        e.exports = r.p + "25af77f6215b24f2a6db9acb3ffdbba5.png"
    }
    ,
    67262: (e, t, r) => {
        e.exports = r.p + "cfc9b811866aed0540644eb1c860985f.png"
    }
    ,
    4484: (e, t, r) => {
        e.exports = r.p + "3456b398dad3c2943d445b4c200bde9b.png"
    }
    ,
    63498: (e, t, r) => {
        e.exports = r.p + "d4480f1c1be29a0e6c1fa7c63b970a18.png"
    }
    ,
    13993: (e, t, r) => {
        e.exports = r.p + "c46796e51ae622b694657bcdbb9c3e3c.png"
    }
    ,
    41039: (e, t, r) => {
        e.exports = r.p + "6f2ed9d6f802aae1c46620dea14797d2.png"
    }
    ,
    53534: (e, t, r) => {
        e.exports = r.p + "59f92c38a6698d199264cf15f82d2306.png"
    }
    ,
    93719: (e, t, r) => {
        e.exports = r.p + "e86a8bff8815e2dc3efe05c03751599f.png"
    }
    ,
    96874: (e, t, r) => {
        e.exports = r.p + "100db3eb8fa889fa9ab907c00be705b9.png"
    }
    ,
    77287: (e, t, r) => {
        e.exports = r.p + "56c192f13309bcd18e6afaed643223e9.png"
    }
    ,
    17576: (e, t, r) => {
        e.exports = r.p + "2a76711da48274fa6e3ce11cd2c01838.png"
    }
    ,
    96142: (e, t, r) => {
        e.exports = r.p + "32b77f3ff496b1d7e991abb2e92ee7a1.png"
    }
    ,
    61228: (e, t, r) => {
        e.exports = r.p + "c10c656996297971c6f8adffde15942c.png"
    }
    ,
    25981: (e, t, r) => {
        e.exports = r.p + "8947376ca73753b4e068cdbceea4c855.png"
    }
    ,
    84899: (e, t, r) => {
        e.exports = r.p + "37f65972de8976b95e66bf4d89b00796.png"
    }
    ,
    21801: (e, t, r) => {
        e.exports = r.p + "7cc7c4c40669d8f906a5b98235aca1e4.png"
    }
    ,
    33314: (e, t, r) => {
        e.exports = r.p + "a3cc75213c562112bd9180faf1c63d5a.png"
    }
    ,
    36024: (e, t, r) => {
        e.exports = r.p + "e1080eeb32732dcad79953163632e55e.png"
    }
    ,
    40011: (e, t, r) => {
        e.exports = r.p + "472d18f53368d532919aa08009f02add.png"
    }
    ,
    96036: (e, t, r) => {
        e.exports = r.p + "1e7d885194527936d627c2cc84b6dd02.png"
    }
    ,
    48507: (e, t, r) => {
        e.exports = r.p + "d6bb79b5e359681a0ceb5d8e817c8c7c.png"
    }
    ,
    83873: (e, t, r) => {
        e.exports = r.p + "d233369a184c7a5244ee1d5d1beb2ac3.png"
    }
    ,
    50832: (e, t, r) => {
        e.exports = r.p + "d64a7bdb62bca3b0094069755cccf7b9.png"
    }
    ,
    78442: (e, t, r) => {
        e.exports = r.p + "03109e01bd1cfff9a5d817d62dfadcd0.png"
    }
    ,
    29820: (e, t, r) => {
        e.exports = r.p + "a96c54eefe490ecdfb7b0e9df78a0a95.png"
    }
    ,
    44971: (e, t, r) => {
        e.exports = r.p + "b78e7b262ba94cf91aea8d8526d97870.png"
    }
    ,
    49321: (e, t, r) => {
        e.exports = r.p + "71b89360e7a95b405497a91ccd080d0b.png"
    }
    ,
    84999: (e, t, r) => {
        e.exports = r.p + "f06bb6376fffe37130af32a8b619e039.png"
    }
    ,
    62724: (e, t, r) => {
        e.exports = r.p + "23560d5da4d400adbc1de26b9c08bc75.png"
    }
    ,
    62973: (e, t, r) => {
        e.exports = r.p + "5bcaaeea3a114c9ed3d2352c8c86094a.png"
    }
    ,
    59042: (e, t, r) => {
        e.exports = r.p + "efa6cb267f6db60f022aae5722c6f7bb.png"
    }
    ,
    71399: (e, t, r) => {
        e.exports = r.p + "9bb6495ff4fd03fde5bc312b5f07bb08.jpg"
    }
    ,
    21617: (e, t, r) => {
        e.exports = r.p + "31f41cd2cec734c578d01524d19092a2.svg"
    }
    ,
    41940: (e, t, r) => {
        e.exports = r.p + "3830c57b7e14ed0be0dfb6b4e56d59b7.svg"
    }
    ,
    68853: (e, t, r) => {
        e.exports = r.p + "cfcf4c597bb9fdc59ddf67e68ca9a8b1.svg"
    }
    ,
    46274: (e, t, r) => {
        e.exports = r.p + "94142d7c3d8e0f2530387a8bcc415886.svg"
    }
    ,
    61550: (e, t, r) => {
        e.exports = r.p + "c332a6543d12f3756fda1ac90dfbd4f7.svg"
    }
    ,
    72932: (e, t, r) => {
        e.exports = r.p + "2a2d92a2f55ca84ce5775c6944fe7363.svg"
    }
    ,
    72048: (e, t, r) => {
        e.exports = r.p + "22d12373a67ca5ba60c9b89869ebe07d.svg"
    }
    ,
    50459: (e, t, r) => {
        e.exports = r.p + "54a18583409e209c7045d3f26dc8d193.svg"
    }
    ,
    60124: (e, t, r) => {
        e.exports = r.p + "f2c5395aac0bfa256dc6900a48d32ae9.svg"
    }
    ,
    86946: (e, t, r) => {
        e.exports = r.p + "597bbd9bfa76df4da7c95110cc454f29.svg"
    }
    ,
    28301: (e, t, r) => {
        e.exports = r.p + "2fa182a4225ca0215c64526a6fd54b12.svg"
    }
    ,
    58863: (e, t, r) => {
        e.exports = r.p + "965fd58145c7734dbdd4d172f5ff3419.svg"
    }
    ,
    89276: (e, t, r) => {
        e.exports = r.p + "b568c4bca6163358d3e5d36c9285cef1.svg"
    }
    ,
    96231: (e, t, r) => {
        e.exports = r.p + "53073678e8324ebd2771a1bc6102aba7.svg"
    }
    ,
    65297: (e, t, r) => {
        e.exports = r.p + "28bada69d1c4cd9ca3439d2ebc51df07.svg"
    }
    ,
    93762: (e, t, r) => {
        e.exports = r.p + "57b04e6f92a2c4b21bbd5b8b5361d5fd.svg"
    }
    ,
    42395: (e, t, r) => {
        e.exports = r.p + "fb2e68d1eb4de0c9178d28f40d4f51b1.svg"
    }
    ,
    23464: (e, t, r) => {
        e.exports = r.p + "76c21cde6e78bcb5064b07eacbe9e809.svg"
    }
    ,
    52589: (e, t, r) => {
        e.exports = r.p + "e0d4265794310a192e91b4dd563eb628.svg"
    }
    ,
    82750: (e, t, r) => {
        e.exports = r.p + "3ae32f3e88811480d6f74aee22b311c4.svg"
    }
    ,
    19507: (e, t, r) => {
        e.exports = r.p + "7b67a1dcc1cddc2de625a6b939122258.svg"
    }
    ,
    61981: (e, t, r) => {
        e.exports = r.p + "f2e7e039481fe710db89197038b53d11.svg"
    }
    ,
    54245: (e, t, r) => {
        e.exports = r.p + "e5c8ffdcf564b768a95069c19629547c.svg"
    }
    ,
    72245: (e, t, r) => {
        e.exports = r.p + "09766cb9ffc674f1778321d66a4564eb.svg"
    }
    ,
    71102: (e, t, r) => {
        e.exports = r.p + "64128753a1fcc73b3c717f0bdff01672.png"
    }
    ,
    14794: (e, t, r) => {
        e.exports = r.p + "e35cc6b6e7e83c6e011468b60c42f5d0.svg"
    }
    ,
    34379: (e, t, r) => {
        e.exports = r.p + "8a3ec0793b9a4fa899042a7aa42d771b.png"
    }
    ,
    90825: (e, t, r) => {
        e.exports = r.p + "721e15245b714f1fdd4397d2bfbacfa0.png"
    }
    ,
    22264: (e, t, r) => {
        e.exports = r.p + "47f8ca0f8ed1356ad9cba0f8b6edb125.png"
    }
    ,
    41730: (e, t, r) => {
        e.exports = r.p + "ac91c25109308fb4dfe2c2c14d8c6fb8.svg"
    }
    ,
    57332: (e, t, r) => {
        e.exports = r.p + "b30bc5eb5fae95e9863d32e92dabcaf0.png"
    }
    ,
    53826: (e, t, r) => {
        e.exports = r.p + "49fd096c6427cff5f45280c450895c48.png"
    }
    ,
    89896: (e, t, r) => {
        e.exports = r.p + "3d2aacb28e67a45ffb61f22f554061b2.png"
    }
    ,
    8986: (e, t, r) => {
        e.exports = r.p + "6c5472199da37f6413ebfb4e537453ab.png"
    }
    ,
    61522: (e, t, r) => {
        e.exports = r.p + "d2991b094872970e141e1a840209f00c.png"
    }
    ,
    1414: (e, t, r) => {
        e.exports = r.p + "55df0ca78e076d2fc7990e80027e7d9f.png"
    }
    ,
    53176: (e, t, r) => {
        e.exports = r.p + "ec7a8c5e1fba536c7b1c012944c542d2.png"
    }
    ,
    42712: (e, t, r) => {
        e.exports = r.p + "f9bb9c4af2b9c32a2c5ee0014661546d.png"
    }
    ,
    30360: (e, t, r) => {
        e.exports = r.p + "bd4d341119ce3fd56a42d5fd542c1ef6.png"
    }
    ,
    82435: (e, t, r) => {
        e.exports = r.p + "33c29f656f10691e240bd25d47f4243b.png"
    }
    ,
    30842: (e, t, r) => {
        e.exports = r.p + "f501c6008bf010a3e3c768ce92ebb63d.png"
    }
    ,
    66445: (e, t, r) => {
        e.exports = r.p + "20d185289ca0178b8dd30d7605f6dc72.svg"
    }
    ,
    67726: (e, t, r) => {
        e.exports = r.p + "b86dee9d7afaf8c63f113aceeed110f1.svg"
    }
    ,
    79108: (e, t, r) => {
        e.exports = r.p + "24f14d488167a316c6360d598fecc426.svg"
    }
    ,
    72385: (e, t, r) => {
        e.exports = r.p + "9e7ebb99d24c80f67361f4584dbf2ba8.png"
    }
    ,
    10190: (e, t, r) => {
        e.exports = r.p + "268c5f352fe4761cd46ebc102a4fe77c.png"
    }
    ,
    87716: (e, t, r) => {
        e.exports = r.p + "b48bb4e5772672ea9d46441ebf52bb52.png"
    }
    ,
    92982: (e, t, r) => {
        e.exports = r.p + "a94efa1dbf455b117999851db9795dd5.png"
    }
    ,
    59087: (e, t, r) => {
        e.exports = r.p + "372ca9b19e9ac4d8620c92ee02e2de0c.png"
    }
    ,
    47628: (e, t, r) => {
        e.exports = r.p + "56d009db052913ece329c2751c22e6da.svg"
    }
    ,
    28806: (e, t, r) => {
        e.exports = r.p + "67545060ebee4d6666e9860152a89dad.svg"
    }
    ,
    75611: (e, t, r) => {
        e.exports = r.p + "aa74f5efd211835607c2e10b74c25ec2.svg"
    }
    ,
    21340: (e, t, r) => {
        e.exports = r.p + "034e9cc38da2be2472ee24eb47738d0e.mp3"
    }
    ,
    10228: e => {
        "use strict";
        e.exports = JSON.parse('{"0":"O","1":"l","֭":"֖","֮":"֘","֨":"֙","֤":"֚","᪴":"ۛ","⃛":"ۛ","ؙ":"̓","ࣳ":"̓","̓":"̓","̕":"̓","ُ":"̓","ٝ":"̔","֜":"́","֝":"́","ؘ":"́","݇":"́","́":"́","॔":"́","َ":"́","̀":"̀","॓":"̀","̌":"̆","꙼":"̆","٘":"̆","ٚ":"̆","ͮ":"̆","ۨ":"̆̇","̐":"̆̇","ँ":"̆̇","ঁ":"̆̇","ઁ":"̆̇","ଁ":"̆̇","ఀ":"̆̇","ಁ":"̆̇","ഁ":"̆̇","𑒿":"̆̇","᳐":"̂","̑":"̂","ٛ":"̂","߮":"̂","꛰":"̂","֯":"̊","۟":"̊","៓":"̊","゚":"̊","ْ":"̊","ஂ":"̊","ံ":"̊","ំ":"̊","𑌀":"̊","ํ":"̊","ໍ":"̊","ͦ":"̊","ⷪ":"̊","࣫":"̈","߳":"̈","ً":"̋","ࣰ":"̋","͂":"̃","ٓ":"̃","ׄ":"̇","۬":"̇","݀":"̇","࣪":"̇","݁":"̇","͘":"̇","ֹ":"̇","ֺ":"̇","ׂ":"̇","ׁ":"̇","߭":"̇","ं":"̇","ਂ":"̇","ં":"̇","்":"̇","̷":"̸","᪷":"̨","̢":"̨","ͅ":"̨","᳒":"̄","̅":"̄","ٙ":"̄","߫":"̄","꛱":"̄","᳚":"̎","ٗ":"̒","͗":"͐","ࣿ":"͐","ࣸ":"͐","ऀ":"͒","᳭":"̖","᳜":"̩","ٖ":"̩","᳕":"̫","͇":"̳","ࣹ":"͔","ࣺ":"͕","゛":"ﾞ","゜":"ﾟ","̶":"̵","〬":"̉","ׅ":"̣","࣭":"̣","᳝":"̣","ִ":"̣","ٜ":"̣","़":"̣","়":"̣","਼":"̣","઼":"̣","଼":"̣","𑇊":"̣","𑓃":"̣","𐨺":"̣","࣮":"̤","᳞":"̤","༷":"̥","〭":"̥","̧":"̦","̡":"̦","̹":"̦","᳙":"̭","᳘":"̮","॒":"̱","̠":"̱","ࣱ":"ٌ","ࣨ":"ٌ","ࣥ":"ٌ","ﱞ":"ﹲّ","ࣲ":"ٍ","ﱟ":"ﹴّ","ﳲ":"ﹷّ","ﱠ":"ﹶّ","ﳳ":"ﹹّ","ﱡ":"ﹸّ","ؚ":"ِ","̗":"ِ","ﳴ":"ﹻّ","ﱢ":"ﹺّ","ﱣ":"ﹼٰ","ٟ":"ٕ","̍":"ٰ","݂":"ܼ","ਃ":"ঃ","ః":"ঃ","ಃ":"ঃ","ഃ":"ঃ","ඃ":"ঃ","း":"ঃ","𑓁":"ঃ","់":"่","່":"่","້":"้","໊":"๊","໋":"๋","꙯":"⃩","\\u2028":" ","\\u2029":" "," ":" "," ":" "," ":" "," ":" "," ":" "," ":" "," ":" "," ":" "," ":" "," ":" "," ":" "," ":" "," ":" "," ":" "," ":" ","ߺ":"_","﹍":"_","﹎":"_","﹏":"_","‐":"-","‑":"-","‒":"-","–":"-","﹘":"-","۔":"-","⁃":"-","˗":"-","−":"-","➖":"-","Ⲻ":"-","⨩":"-̓","⸚":"-̈","﬩":"-̇","∸":"-̇","⨪":"-̣","꓾":"-.","～":"〜","؍":",","٫":",","‚":",","¸":",","ꓹ":",","⸲":"،","٬":"،",";":";","⸵":"؛","ः":":","ઃ":":","：":":","։":":","܃":":","܄":":","᛬":":","︰":":","᠃":":","᠉":":","⁚":":","׃":":","˸":":","꞉":":","∶":":","ː":":","ꓽ":":","⩴":"::=","⧴":":→","！":"!","ǃ":"!","ⵑ":"!","‼":"!!","⁉":"!?","ʔ":"?","Ɂ":"?","ॽ":"?","Ꭾ":"?","ꛫ":"?","⁈":"?!","⁇":"??","⸮":"؟","𝅭":".","․":".","܁":".","܂":".","꘎":".","𐩐":".","٠":".","۰":".","ꓸ":".","ꓻ":".,","‥":"..","ꓺ":"..","…":"...","꛴":"꛳꛳","・":"·","･":"·","᛫":"·","·":"·","⸱":"·","𐄁":"·","•":"·","‧":"·","∙":"·","⋅":"·","ꞏ":"·","ᐧ":"·","⋯":"···","ⵈ":"···","ᑄ":"·<","⋗":"·>","ᐷ":"·>","ᑀ":"·>","ᔯ":"·4","ᑾ":"·b","ᒀ":"·ḃ","ᑺ":"·d","ᒘ":"·J","ᒶ":"·L","ᑶ":"·P","ᑗ":"·U","ᐺ":"·V","ᐼ":"·Ʌ","ᒮ":"·Γ","ᐎ":"·Δ","ᑙ":"·Ո","ᐌ":"·ᐁ","ᐐ":"·ᐄ","ᐒ":"·ᐅ","ᐔ":"·ᐆ","ᐗ":"·ᐊ","ᐙ":"·ᐋ","ᐾ":"·ᐲ","ᑂ":"·ᐴ","ᑆ":"·ᐹ","ᑛ":"·ᑏ","ᑔ":"·ᑐ","ᑝ":"·ᑐ","ᑟ":"·ᑑ","ᑡ":"·ᑕ","ᑣ":"·ᑖ","ᑴ":"·ᑫ","ᑸ":"·ᑮ","ᑼ":"·ᑰ","ᒒ":"·ᒉ","ᒔ":"·ᒋ","ᒖ":"·ᒌ","ᒚ":"·ᒎ","ᒜ":"·ᒐ","ᒞ":"·ᒑ","ᒬ":"·ᒣ","ᒰ":"·ᒦ","ᒲ":"·ᒧ","ᒴ":"·ᒨ","ᒸ":"·ᒫ","ᓉ":"·ᓀ","ᣆ":"·ᓂ","ᣈ":"·ᓃ","ᣊ":"·ᓄ","ᣌ":"·ᓅ","ᓋ":"·ᓇ","ᓍ":"·ᓈ","ᓜ":"·ᓓ","ᓞ":"·ᓕ","ᓠ":"·ᓖ","ᓢ":"·ᓗ","ᓤ":"·ᓘ","ᓦ":"·ᓚ","ᓨ":"·ᓛ","ᓶ":"·ᓭ","ᓸ":"·ᓯ","ᓺ":"·ᓰ","ᓼ":"·ᓱ","ᓾ":"·ᓲ","ᔀ":"·ᓴ","ᔂ":"·ᓵ","ᔗ":"·ᔐ","ᔙ":"·ᔑ","ᔛ":"·ᔒ","ᔝ":"·ᔓ","ᔟ":"·ᔔ","ᔡ":"·ᔕ","ᔣ":"·ᔖ","ᔱ":"·ᔨ","ᔳ":"·ᔩ","ᔵ":"·ᔪ","ᔷ":"·ᔫ","ᔹ":"·ᔭ","ᔻ":"·ᔮ","ᣎ":"·ᕃ","ᣏ":"·ᕆ","ᣐ":"·ᕇ","ᣑ":"·ᕈ","ᣒ":"·ᕉ","ᣓ":"·ᕋ","ᕎ":"·ᕌ","ᕛ":"·ᕚ","ᕨ":"·ᕧ","ᢳ":"·ᢱ","ᢶ":"·ᢴ","ᢹ":"·ᢸ","ᣂ":"·ᣀ","꠰":"।","॥":"।।","᰼":"᰻᰻","။":"၊၊","᪩":"᪨᪨","᪫":"᪪᪨","᭟":"᭞᭞","𐩗":"𐩖𐩖","𑑌":"𑑋𑑋","𑙂":"𑙁𑙁","𑱂":"𑱁𑱁","᱿":"᱾᱾","՝":"\'","＇":"\'","‘":"\'","’":"\'","‛":"\'","′":"\'","‵":"\'","՚":"\'","׳":"\'","`":"\'","`":"\'","｀":"\'","´":"\'","΄":"\'","´":"\'","᾽":"\'","᾿":"\'","῾":"\'","ʹ":"\'","ʹ":"\'","ˈ":"\'","ˊ":"\'","ˋ":"\'","˴":"\'","ʻ":"\'","ʽ":"\'","ʼ":"\'","ʾ":"\'","ꞌ":"\'","י":"\'","ߴ":"\'","ߵ":"\'","ᑊ":"\'","ᛌ":"\'","𖽑":"\'","𖽒":"\'","᳓":"\'\'","\\"":"\'\'","＂":"\'\'","“":"\'\'","”":"\'\'","‟":"\'\'","″":"\'\'","‶":"\'\'","〃":"\'\'","״":"\'\'","˝":"\'\'","ʺ":"\'\'","˶":"\'\'","ˮ":"\'\'","ײ":"\'\'","‴":"\'\'\'","‷":"\'\'\'","⁗":"\'\'\'\'","Ɓ":"\'B","Ɗ":"\'D","ŉ":"\'n","Ƥ":"\'P","Ƭ":"\'T","Ƴ":"\'Y","［":"(","❨":"(","❲":"(","〔":"(","﴾":"(","⸨":"((","㈠":"(ー)","⑵":"(2)","⒇":"(2O)","⑶":"(3)","⑷":"(4)","⑸":"(5)","⑹":"(6)","⑺":"(7)","⑻":"(8)","⑼":"(9)","⒜":"(a)","🄐":"(A)","⒝":"(b)","🄑":"(B)","⒞":"(c)","🄒":"(C)","⒟":"(d)","🄓":"(D)","⒠":"(e)","🄔":"(E)","⒡":"(f)","🄕":"(F)","⒢":"(g)","🄖":"(G)","⒣":"(h)","🄗":"(H)","⒤":"(i)","⒥":"(j)","🄙":"(J)","⒦":"(k)","🄚":"(K)","⑴":"(l)","🄘":"(l)","⒧":"(l)","🄛":"(L)","⑿":"(l2)","⒀":"(l3)","⒁":"(l4)","⒂":"(l5)","⒃":"(l6)","⒄":"(l7)","⒅":"(l8)","⒆":"(l9)","⑾":"(ll)","⑽":"(lO)","🄜":"(M)","⒩":"(n)","🄝":"(N)","⒪":"(o)","🄞":"(O)","⒫":"(p)","🄟":"(P)","⒬":"(q)","🄠":"(Q)","⒭":"(r)","🄡":"(R)","⒨":"(rn)","⒮":"(s)","🄢":"(S)","🄪":"(S)","⒯":"(t)","🄣":"(T)","⒰":"(u)","🄤":"(U)","⒱":"(v)","🄥":"(V)","⒲":"(w)","🄦":"(W)","⒳":"(x)","🄧":"(X)","⒴":"(y)","🄨":"(Y)","⒵":"(z)","🄩":"(Z)","㈀":"(ᄀ)","㈎":"(가)","㈁":"(ᄂ)","㈏":"(나)","㈂":"(ᄃ)","㈐":"(다)","㈃":"(ᄅ)","㈑":"(라)","㈄":"(ᄆ)","㈒":"(마)","㈅":"(ᄇ)","㈓":"(바)","㈆":"(ᄉ)","㈔":"(사)","㈇":"(ᄋ)","㈕":"(아)","㈝":"(오전)","㈞":"(오후)","㈈":"(ᄌ)","㈖":"(자)","㈜":"(주)","㈉":"(ᄎ)","㈗":"(차)","㈊":"(ᄏ)","㈘":"(카)","㈋":"(ᄐ)","㈙":"(타)","㈌":"(ᄑ)","㈚":"(파)","㈍":"(ᄒ)","㈛":"(하)","㈦":"(七)","㈢":"(三)","🉁":"(三)","㈨":"(九)","㈡":"(二)","🉂":"(二)","㈤":"(五)","㈹":"(代)","㈽":"(企)","㉁":"(休)","㈧":"(八)","㈥":"(六)","㈸":"(労)","🉇":"(勝)","㈩":"(十)","㈿":"(協)","㈴":"(名)","㈺":"(呼)","㈣":"(四)","㈯":"(土)","㈻":"(学)","🉃":"(安)","🉅":"(打)","🉈":"(敗)","㈰":"(日)","㈪":"(月)","㈲":"(有)","㈭":"(木)","🉀":"(本)","㈱":"(株)","㈬":"(水)","㈫":"(火)","🉄":"(点)","㈵":"(特)","🉆":"(盗)","㈼":"(監)","㈳":"(社)","㈷":"(祝)","㉀":"(祭)","㉂":"(自)","㉃":"(至)","㈶":"(財)","㈾":"(資)","㈮":"(金)","］":")","❩":")","❳":")","〕":")","﴿":")","⸩":"))","❴":"{","𝄔":"{","❵":"}","〚":"⟦","〛":"⟧","⟨":"❬","〈":"❬","〈":"❬","㇛":"❬","く":"❬","𡿨":"❬","⟩":"❭","〉":"❭","〉":"❭","＾":"︿","⸿":"¶","⁎":"*","٭":"*","∗":"*","𐌟":"*","᜵":"/","⁁":"/","∕":"/","⁄":"/","╱":"/","⟋":"/","⧸":"/","𝈺":"/","㇓":"/","〳":"/","Ⳇ":"/","ノ":"/","丿":"/","⼃":"/","⧶":"/̄","⫽":"//","⫻":"///","＼":"\\\\","﹨":"\\\\","∖":"\\\\","⟍":"\\\\","⧵":"\\\\","⧹":"\\\\","𝈏":"\\\\","𝈻":"\\\\","㇔":"\\\\","丶":"\\\\","⼂":"\\\\","⳹":"\\\\\\\\","⑊":"\\\\\\\\","⟈":"\\\\ᑕ","ꝸ":"&","૰":"॰","𑂻":"॰","𑇇":"॰","⚬":"॰","𑇛":"꣼","៙":"๏","៕":"๚","៚":"๛","༌":"་","༎":"།།","˄":"^","ˆ":"^","꙾":"ˇ","˘":"ˇ","‾":"ˉ","﹉":"ˉ","﹊":"ˉ","﹋":"ˉ","﹌":"ˉ","¯":"ˉ","￣":"ˉ","▔":"ˉ","ъ":"ˉb","ꙑ":"ˉbi","͵":"ˏ","˻":"˪","꜖":"˪","꜔":"˫","。":"˳","⸰":"°","˚":"°","∘":"°","○":"°","◦":"°","⍜":"°̲","⍤":"°̈","℃":"°C","℉":"°F","௵":"௳","༛":"༚༚","༟":"༚༝","࿎":"༝༚","༞":"༝༝","Ⓒ":"©","Ⓡ":"®","Ⓟ":"℗","𝈛":"⅄","⯬":"↞","⯭":"↟","⯮":"↠","⯯":"↡","↵":"↲","⥥":"⇃⇂","⥯":"⇃ᛚ","𝛛":"∂","𝜕":"∂","𝝏":"∂","𝞉":"∂","𝟃":"∂","𞣌":"∂","𞣍":"∂̵","ð":"∂̵","⌀":"∅","𝛁":"∇","𝛻":"∇","𝜵":"∇","𝝯":"∇","𝞩":"∇","𑢨":"∇","⍢":"∇̈","⍫":"∇̴","█":"∎","■":"∎","⨿":"∐","᛭":"+","➕":"+","𐊛":"+","⨣":"+̂","⨢":"+̊","⨤":"+̃","∔":"+̇","⨥":"+̣","⨦":"+̰","⨧":"+₂","➗":"÷","‹":"<","❮":"<","˂":"<","𝈶":"<","ᐸ":"<","ᚲ":"<","⋖":"<·","Ⲵ":"<·","ᑅ":"<·","≪":"<<","⋘":"<<<","᐀":"=","⹀":"=","゠":"=","꓿":"=","≚":"=̆","≙":"=̂","≗":"=̊","≐":"=̇","≑":"=̣̇","⩮":"=⃰","⩵":"==","⩶":"===","≞":"=ͫ","›":">","❯":">","˃":">","𝈷":">","ᐳ":">","𖼿":">","ᑁ":">·","⪥":"><","≫":">>","⨠":">>","⋙":">>>","⁓":"~","˜":"~","῀":"~","∼":"~","⍨":"~̈","⸞":"~̇","⩪":"~̇","⸟":"~̣","𞣈":"∠","⋀":"∧","∯":"∮∮","∰":"∮∮∮","⸫":"∴","⸪":"∵","⸬":"∷","𑇞":"≈","♎":"≏","🝞":"≏","≣":"≡","⨃":"⊍","⨄":"⊎","𝈸":"⊏","𝈹":"⊐","⨅":"⊓","⨆":"⊔","⨂":"⊗","⍟":"⊛","🝱":"⊠","🝕":"⊡","◁":"⊲","▷":"⊳","⍣":"⋆̈","︴":"⌇","◠":"⌒","⨽":"⌙","⌥":"⌤","⧇":"⌻","◎":"⌾","⦾":"⌾","⧅":"⍂","⦰":"⍉","⏃":"⍋","⏂":"⍎","⏁":"⍕","⏆":"⍭","☸":"⎈","︵":"⏜","︶":"⏝","︷":"⏞","︸":"⏟","︹":"⏠","︺":"⏡","▱":"⏥","⏼":"⏻","︱":"│","｜":"│","┃":"│","┏":"┌","┣":"├","▐":"▌","▗":"▖","▝":"▘","☐":"□","￭":"▪","▸":"▶","►":"▶","⳩":"☧","🜊":"☩","🌒":"☽","🌙":"☽","⏾":"☾","🌘":"☾","⧙":"⦚","🜺":"⧟","⨾":"⨟","𐆠":"⳨","♩":"𝅘𝅥","♪":"𝅘𝅥𝅮","⓪":"🄍","↺":"🄎","˙":"ॱ","ൎ":"ॱ","－":"ー","—":"ー","―":"ー","─":"ー","━":"ー","㇐":"ー","ꟷ":"ー","ᅳ":"ー","ㅡ":"ー","一":"ー","⼀":"ー","ᆖ":"ーー","ힹ":"ーᅡ","ힺ":"ーᅥ","ힻ":"ーᅥ丨","ힼ":"ーᅩ","ᆕ":"ーᅮ","ᅴ":"ー丨","ㅢ":"ー丨","ᆗ":"ー丨ᅮ","🄏":"$⃠","₤":"£","〒":"₸","〶":"₸","᭜":"᭐","꧆":"꧐","𑓑":"১","೧":"౧","ၥ":"၁","①":"➀","⑩":"➉","⏨":"₁₀","𝟐":"2","𝟚":"2","𝟤":"2","𝟮":"2","𝟸":"2","🯲":"2","Ꝛ":"2","Ƨ":"2","Ϩ":"2","Ꙅ":"2","ᒿ":"2","ꛯ":"2","ꧏ":"٢","۲":"٢","૨":"२","𑓒":"২","೨":"౨","②":"➁","ƻ":"2̵","🄃":"2,","⒉":"2.","㏵":"22日","㍮":"22点","㏶":"23日","㍯":"23点","㏷":"24日","㍰":"24点","㏸":"25日","㏹":"26日","㏺":"27日","㏻":"28日","㏼":"29日","㏴":"2l日","㍭":"2l点","⒛":"2O.","㏳":"2O日","㍬":"2O点","෩":"෨ා","෯":"෨ී","㏡":"2日","㋁":"2月","㍚":"2点","𝈆":"3","𝟑":"3","𝟛":"3","𝟥":"3","𝟯":"3","𝟹":"3","🯳":"3","Ɜ":"3","Ȝ":"3","Ʒ":"3","Ꝫ":"3","Ⳍ":"3","З":"3","Ӡ":"3","𖼻":"3","𑣊":"3","۳":"٣","𞣉":"٣","૩":"३","③":"➂","Ҙ":"3̦","🄄":"3,","⒊":"3.","㏾":"3l日","㏽":"3O日","㏢":"3日","㋂":"3月","㍛":"3点","𝟒":"4","𝟜":"4","𝟦":"4","𝟰":"4","𝟺":"4","🯴":"4","Ꮞ":"4","𑢯":"4","۴":"٤","૪":"४","④":"➃","🄅":"4,","⒋":"4.","ᔰ":"4·","㏣":"4日","㋃":"4月","㍜":"4点","𝟓":"5","𝟝":"5","𝟧":"5","𝟱":"5","𝟻":"5","🯵":"5","Ƽ":"5","𑢻":"5","⑤":"➄","🄆":"5,","⒌":"5.","㏤":"5日","㋄":"5月","㍝":"5点","𝟔":"6","𝟞":"6","𝟨":"6","𝟲":"6","𝟼":"6","🯶":"6","Ⳓ":"6","б":"6","Ꮾ":"6","𑣕":"6","۶":"٦","𑓖":"৬","⑥":"➅","🄇":"6,","⒍":"6.","㏥":"6日","㋅":"6月","㍞":"6点","𝈒":"7","𝟕":"7","𝟟":"7","𝟩":"7","𝟳":"7","𝟽":"7","🯷":"7","𐓒":"7","𑣆":"7","⑦":"➆","🄈":"7,","⒎":"7.","㏦":"7日","㋆":"7月","㍟":"7点","ଃ":"8","৪":"8","੪":"8","𞣋":"8","𝟖":"8","𝟠":"8","𝟪":"8","𝟴":"8","𝟾":"8","🯸":"8","ȣ":"8","Ȣ":"8","𐌚":"8","૮":"८","⑧":"➇","🄉":"8,","⒏":"8.","㏧":"8日","㋇":"8月","㍠":"8点","੧":"9","୨":"9","৭":"9","൭":"9","𝟗":"9","𝟡":"9","𝟫":"9","𝟵":"9","𝟿":"9","🯹":"9","Ꝯ":"9","Ⳋ":"9","𑣌":"9","𑢬":"9","𑣖":"9","१":"٩","𑣤":"٩","۹":"٩","೯":"౯","⑨":"➈","🄊":"9,","⒐":"9.","㏨":"9日","㋈":"9月","㍡":"9点","⍺":"a","ａ":"a","𝐚":"a","𝑎":"a","𝒂":"a","𝒶":"a","𝓪":"a","𝔞":"a","𝕒":"a","𝖆":"a","𝖺":"a","𝗮":"a","𝘢":"a","𝙖":"a","𝚊":"a","ɑ":"a","α":"a","𝛂":"a","𝛼":"a","𝜶":"a","𝝰":"a","𝞪":"a","а":"a","ⷶ":"ͣ","Ａ":"A","𝐀":"A","𝐴":"A","𝑨":"A","𝒜":"A","𝓐":"A","𝔄":"A","𝔸":"A","𝕬":"A","𝖠":"A","𝗔":"A","𝘈":"A","𝘼":"A","𝙰":"A","Α":"A","𝚨":"A","𝛢":"A","𝜜":"A","𝝖":"A","𝞐":"A","А":"A","Ꭺ":"A","ᗅ":"A","ꓮ":"A","𖽀":"A","𐊠":"A","⍶":"a̲","ǎ":"ă","Ǎ":"Ă","ȧ":"å","Ȧ":"Å","ẚ":"ả","℀":"a/c","℁":"a/s","ꜳ":"aa","Ꜳ":"AA","æ":"ae","ӕ":"ae","Æ":"AE","Ӕ":"AE","ꜵ":"ao","Ꜵ":"AO","🜇":"AR","ꜷ":"au","Ꜷ":"AU","ꜹ":"av","ꜻ":"av","Ꜹ":"AV","Ꜻ":"AV","ꜽ":"ay","Ꜽ":"AY","ꭺ":"ᴀ","∀":"Ɐ","𝈗":"Ɐ","ᗄ":"Ɐ","ꓯ":"Ɐ","𐐟":"Ɒ","𝐛":"b","𝑏":"b","𝒃":"b","𝒷":"b","𝓫":"b","𝔟":"b","𝕓":"b","𝖇":"b","𝖻":"b","𝗯":"b","𝘣":"b","𝙗":"b","𝚋":"b","Ƅ":"b","Ь":"b","Ꮟ":"b","ᑲ":"b","ᖯ":"b","Ｂ":"B","ℬ":"B","𝐁":"B","𝐵":"B","𝑩":"B","𝓑":"B","𝔅":"B","𝔹":"B","𝕭":"B","𝖡":"B","𝗕":"B","𝘉":"B","𝘽":"B","𝙱":"B","Ꞵ":"B","Β":"B","𝚩":"B","𝛣":"B","𝜝":"B","𝝗":"B","𝞑":"B","В":"B","Ᏼ":"B","ᗷ":"B","ꓐ":"B","𐊂":"B","𐊡":"B","𐌁":"B","ɓ":"b̔","ᑳ":"ḃ","ƃ":"b̄","Ƃ":"b̄","Б":"b̄","ƀ":"b̵","ҍ":"b̵","Ҍ":"b̵","ѣ":"b̵","Ѣ":"b̵","ᑿ":"b·","ᒁ":"ḃ·","ᒈ":"b\'","Ы":"bl","в":"ʙ","ᏼ":"ʙ","ｃ":"c","ⅽ":"c","𝐜":"c","𝑐":"c","𝒄":"c","𝒸":"c","𝓬":"c","𝔠":"c","𝕔":"c","𝖈":"c","𝖼":"c","𝗰":"c","𝘤":"c","𝙘":"c","𝚌":"c","ᴄ":"c","ϲ":"c","ⲥ":"c","с":"c","ꮯ":"c","𐐽":"c","ⷭ":"ͨ","🝌":"C","𑣲":"C","𑣩":"C","Ｃ":"C","Ⅽ":"C","ℂ":"C","ℭ":"C","𝐂":"C","𝐶":"C","𝑪":"C","𝒞":"C","𝓒":"C","𝕮":"C","𝖢":"C","𝗖":"C","𝘊":"C","𝘾":"C","𝙲":"C","Ϲ":"C","Ⲥ":"C","С":"C","Ꮯ":"C","ꓚ":"C","𐊢":"C","𐌂":"C","𐐕":"C","𐔜":"C","¢":"c̸","ȼ":"c̸","₡":"C⃫","🅮":"C⃠","ç":"c̦","ҫ":"c̦","Ç":"C̦","Ҫ":"C̦","Ƈ":"C\'","℅":"c/o","℆":"c/u","🅭":"㏄\\t⃝","⋴":"ꞓ","ɛ":"ꞓ","ε":"ꞓ","ϵ":"ꞓ","𝛆":"ꞓ","𝛜":"ꞓ","𝜀":"ꞓ","𝜖":"ꞓ","𝜺":"ꞓ","𝝐":"ꞓ","𝝴":"ꞓ","𝞊":"ꞓ","𝞮":"ꞓ","𝟄":"ꞓ","ⲉ":"ꞓ","є":"ꞓ","ԑ":"ꞓ","ꮛ":"ꞓ","𑣎":"ꞓ","𐐩":"ꞓ","€":"Ꞓ","Ⲉ":"Ꞓ","Є":"Ꞓ","⍷":"ꞓ̲","ͽ":"ꜿ","Ͽ":"Ꜿ","ⅾ":"d","ⅆ":"d","𝐝":"d","𝑑":"d","𝒅":"d","𝒹":"d","𝓭":"d","𝔡":"d","𝕕":"d","𝖉":"d","𝖽":"d","𝗱":"d","𝘥":"d","𝙙":"d","𝚍":"d","ԁ":"d","Ꮷ":"d","ᑯ":"d","ꓒ":"d","Ⅾ":"D","ⅅ":"D","𝐃":"D","𝐷":"D","𝑫":"D","𝒟":"D","𝓓":"D","𝔇":"D","𝔻":"D","𝕯":"D","𝖣":"D","𝗗":"D","𝘋":"D","𝘿":"D","𝙳":"D","Ꭰ":"D","ᗞ":"D","ᗪ":"D","ꓓ":"D","ɗ":"d̔","ɖ":"d̨","ƌ":"d̄","đ":"d̵","Đ":"D̵","Ð":"D̵","Ɖ":"D̵","₫":"ḏ̵","ꝺ":"Ꝺ","ᑻ":"d·","ᒇ":"d\'","ʤ":"dȝ","ǳ":"dz","ʣ":"dz","ǲ":"Dz","Ǳ":"DZ","ǆ":"dž","ǅ":"Dž","Ǆ":"DŽ","ʥ":"dʑ","ꭰ":"ᴅ","⸹":"ẟ","δ":"ẟ","𝛅":"ẟ","𝛿":"ẟ","𝜹":"ẟ","𝝳":"ẟ","𝞭":"ẟ","ծ":"ẟ","ᕷ":"ẟ","℮":"e","ｅ":"e","ℯ":"e","ⅇ":"e","𝐞":"e","𝑒":"e","𝒆":"e","𝓮":"e","𝔢":"e","𝕖":"e","𝖊":"e","𝖾":"e","𝗲":"e","𝘦":"e","𝙚":"e","𝚎":"e","ꬲ":"e","е":"e","ҽ":"e","ⷷ":"ͤ","⋿":"E","Ｅ":"E","ℰ":"E","𝐄":"E","𝐸":"E","𝑬":"E","𝓔":"E","𝔈":"E","𝔼":"E","𝕰":"E","𝖤":"E","𝗘":"E","𝘌":"E","𝙀":"E","𝙴":"E","Ε":"E","𝚬":"E","𝛦":"E","𝜠":"E","𝝚":"E","𝞔":"E","Е":"E","ⴹ":"E","Ꭼ":"E","ꓰ":"E","𑢦":"E","𑢮":"E","𐊆":"E","ě":"ĕ","Ě":"Ĕ","ɇ":"e̸","Ɇ":"E̸","ҿ":"ę","ꭼ":"ᴇ","ə":"ǝ","ә":"ǝ","∃":"Ǝ","ⴺ":"Ǝ","ꓱ":"Ǝ","ɚ":"ǝ˞","ᴔ":"ǝo","ꭁ":"ǝo̸","ꭂ":"ǝo̵","Ә":"Ə","𝈡":"Ɛ","ℇ":"Ɛ","Ԑ":"Ɛ","Ꮛ":"Ɛ","𖼭":"Ɛ","𐐁":"Ɛ","ᶟ":"ᵋ","ᴈ":"ɜ","з":"ɜ","ҙ":"ɜ̦","𐑂":"ɞ","ꞝ":"ʚ","𐐪":"ʚ","𝐟":"f","𝑓":"f","𝒇":"f","𝒻":"f","𝓯":"f","𝔣":"f","𝕗":"f","𝖋":"f","𝖿":"f","𝗳":"f","𝘧":"f","𝙛":"f","𝚏":"f","ꬵ":"f","ꞙ":"f","ſ":"f","ẝ":"f","ք":"f","𝈓":"F","ℱ":"F","𝐅":"F","𝐹":"F","𝑭":"F","𝓕":"F","𝔉":"F","𝔽":"F","𝕱":"F","𝖥":"F","𝗙":"F","𝘍":"F","𝙁":"F","𝙵":"F","Ꞙ":"F","Ϝ":"F","𝟊":"F","ᖴ":"F","ꓝ":"F","𑣂":"F","𑢢":"F","𐊇":"F","𐊥":"F","𐔥":"F","ƒ":"f̦","Ƒ":"F̦","ᵮ":"f̴","℻":"FAX","ﬀ":"ff","ﬃ":"ffi","ﬄ":"ffl","ﬁ":"fi","ﬂ":"fl","ʩ":"fŋ","ᖵ":"Ⅎ","ꓞ":"Ⅎ","𝈰":"ꟻ","ᖷ":"ꟻ","ｇ":"g","ℊ":"g","𝐠":"g","𝑔":"g","𝒈":"g","𝓰":"g","𝔤":"g","𝕘":"g","𝖌":"g","𝗀":"g","𝗴":"g","𝘨":"g","𝙜":"g","𝚐":"g","ɡ":"g","ᶃ":"g","ƍ":"g","ց":"g","𝐆":"G","𝐺":"G","𝑮":"G","𝒢":"G","𝓖":"G","𝔊":"G","𝔾":"G","𝕲":"G","𝖦":"G","𝗚":"G","𝘎":"G","𝙂":"G","𝙶":"G","Ԍ":"G","Ꮐ":"G","Ᏻ":"G","ꓖ":"G","ᶢ":"ᵍ","ɠ":"g̔","ǧ":"ğ","Ǧ":"Ğ","ǵ":"ģ","ǥ":"g̵","Ǥ":"G̵","Ɠ":"G\'","ԍ":"ɢ","ꮐ":"ɢ","ᏻ":"ɢ","ｈ":"h","ℎ":"h","𝐡":"h","𝒉":"h","𝒽":"h","𝓱":"h","𝔥":"h","𝕙":"h","𝖍":"h","𝗁":"h","𝗵":"h","𝘩":"h","𝙝":"h","𝚑":"h","һ":"h","հ":"h","Ꮒ":"h","Ｈ":"H","ℋ":"H","ℌ":"H","ℍ":"H","𝐇":"H","𝐻":"H","𝑯":"H","𝓗":"H","𝕳":"H","𝖧":"H","𝗛":"H","𝘏":"H","𝙃":"H","𝙷":"H","Η":"H","𝚮":"H","𝛨":"H","𝜢":"H","𝝜":"H","𝞖":"H","Ⲏ":"H","Н":"H","Ꮋ":"H","ᕼ":"H","ꓧ":"H","𐋏":"H","ᵸ":"ᴴ","ɦ":"h̔","ꚕ":"h̔","Ᏺ":"h̔","Ⱨ":"H̩","Ң":"H̩","ħ":"h̵","ℏ":"h̵","ћ":"h̵","Ħ":"H̵","Ӊ":"H̦","Ӈ":"H̦","н":"ʜ","ꮋ":"ʜ","ң":"ʜ̩","ӊ":"ʜ̦","ӈ":"ʜ̦","Ԋ":"Ƕ","ꮀ":"ⱶ","Ͱ":"Ⱶ","Ꭸ":"Ⱶ","Ꮀ":"Ⱶ","ꚱ":"Ⱶ","ꞕ":"ꜧ","˛":"i","⍳":"i","ｉ":"i","ⅰ":"i","ℹ":"i","ⅈ":"i","𝐢":"i","𝑖":"i","𝒊":"i","𝒾":"i","𝓲":"i","𝔦":"i","𝕚":"i","𝖎":"i","𝗂":"i","𝗶":"i","𝘪":"i","𝙞":"i","𝚒":"i","ı":"i","𝚤":"i","ɪ":"i","ɩ":"i","ι":"i","ι":"i","ͺ":"i","𝛊":"i","𝜄":"i","𝜾":"i","𝝸":"i","𝞲":"i","і":"i","ꙇ":"i","ӏ":"i","ꭵ":"i","Ꭵ":"i","𑣃":"i","ⓛ":"Ⓘ","⍸":"i̲","ǐ":"ĭ","Ǐ":"Ĭ","ɨ":"i̵","ᵻ":"i̵","ᵼ":"i̵","ⅱ":"ii","ⅲ":"iii","ĳ":"ij","ⅳ":"iv","ⅸ":"ix","ｊ":"j","ⅉ":"j","𝐣":"j","𝑗":"j","𝒋":"j","𝒿":"j","𝓳":"j","𝔧":"j","𝕛":"j","𝖏":"j","𝗃":"j","𝗷":"j","𝘫":"j","𝙟":"j","𝚓":"j","ϳ":"j","ј":"j","Ｊ":"J","𝐉":"J","𝐽":"J","𝑱":"J","𝒥":"J","𝓙":"J","𝔍":"J","𝕁":"J","𝕵":"J","𝖩":"J","𝗝":"J","𝘑":"J","𝙅":"J","𝙹":"J","Ʝ":"J","Ϳ":"J","Ј":"J","Ꭻ":"J","ᒍ":"J","ꓙ":"J","ɉ":"j̵","Ɉ":"J̵","ᒙ":"J·","𝚥":"ȷ","յ":"ȷ","ꭻ":"ᴊ","𝐤":"k","𝑘":"k","𝒌":"k","𝓀":"k","𝓴":"k","𝔨":"k","𝕜":"k","𝖐":"k","𝗄":"k","𝗸":"k","𝘬":"k","𝙠":"k","𝚔":"k","K":"K","Ｋ":"K","𝐊":"K","𝐾":"K","𝑲":"K","𝒦":"K","𝓚":"K","𝔎":"K","𝕂":"K","𝕶":"K","𝖪":"K","𝗞":"K","𝘒":"K","𝙆":"K","𝙺":"K","Κ":"K","𝚱":"K","𝛫":"K","𝜥":"K","𝝟":"K","𝞙":"K","Ⲕ":"K","К":"K","Ꮶ":"K","ᛕ":"K","ꓗ":"K","𐔘":"K","ƙ":"k̔","Ⱪ":"K̩","Қ":"K̩","₭":"K̵","Ꝁ":"K̵","Ҟ":"K̵","Ƙ":"K\'","׀":"l","|":"l","∣":"l","⏽":"l","￨":"l","١":"l","۱":"l","𐌠":"l","𞣇":"l","𝟏":"l","𝟙":"l","𝟣":"l","𝟭":"l","𝟷":"l","🯱":"l","I":"l","Ｉ":"l","Ⅰ":"l","ℐ":"l","ℑ":"l","𝐈":"l","𝐼":"l","𝑰":"l","𝓘":"l","𝕀":"l","𝕴":"l","𝖨":"l","𝗜":"l","𝘐":"l","𝙄":"l","𝙸":"l","Ɩ":"l","ｌ":"l","ⅼ":"l","ℓ":"l","𝐥":"l","𝑙":"l","𝒍":"l","𝓁":"l","𝓵":"l","𝔩":"l","𝕝":"l","𝖑":"l","𝗅":"l","𝗹":"l","𝘭":"l","𝙡":"l","𝚕":"l","ǀ":"l","Ι":"l","𝚰":"l","𝛪":"l","𝜤":"l","𝝞":"l","𝞘":"l","Ⲓ":"l","І":"l","Ӏ":"l","ו":"l","ן":"l","ا":"l","𞸀":"l","𞺀":"l","ﺎ":"l","ﺍ":"l","ߊ":"l","ⵏ":"l","ᛁ":"l","ꓲ":"l","𖼨":"l","𐊊":"l","𐌉":"l","𝈪":"L","Ⅼ":"L","ℒ":"L","𝐋":"L","𝐿":"L","𝑳":"L","𝓛":"L","𝔏":"L","𝕃":"L","𝕷":"L","𝖫":"L","𝗟":"L","𝘓":"L","𝙇":"L","𝙻":"L","Ⳑ":"L","Ꮮ":"L","ᒪ":"L","ꓡ":"L","𖼖":"L","𑢣":"L","𑢲":"L","𐐛":"L","𐔦":"L","ﴼ":"l̋","ﴽ":"l̋","ł":"l̸","Ł":"L̸","ɭ":"l̨","Ɨ":"l̵","ƚ":"l̵","ɫ":"l̴","إ":"lٕ","ﺈ":"lٕ","ﺇ":"lٕ","ٳ":"lٕ","ŀ":"l·","Ŀ":"l·","ᒷ":"l·","🄂":"l,","⒈":"l.","ױ":"l\'","⒓":"l2.","㏫":"l2日","㋋":"l2月","㍤":"l2点","⒔":"l3.","㏬":"l3日","㍥":"l3点","⒕":"l4.","㏭":"l4日","㍦":"l4点","⒖":"l5.","㏮":"l5日","㍧":"l5点","⒗":"l6.","㏯":"l6日","㍨":"l6点","⒘":"l7.","㏰":"l7日","㍩":"l7点","⒙":"l8.","㏱":"l8日","㍪":"l8点","⒚":"l9.","㏲":"l9日","㍫":"l9点","ǉ":"lj","Ĳ":"lJ","ǈ":"Lj","Ǉ":"LJ","‖":"ll","∥":"ll","Ⅱ":"ll","ǁ":"ll","װ":"ll","𐆙":"l̵l̵","⒒":"ll.","Ⅲ":"lll","𐆘":"l̵l̵S̵","㏪":"ll日","㋊":"ll月","㍣":"ll点","Ю":"lO","⒑":"lO.","㏩":"lO日","㋉":"lO月","㍢":"lO点","ʪ":"ls","₶":"lt","Ⅳ":"lV","Ⅸ":"lX","ɮ":"lȝ","ʫ":"lz","أ":"lٴ","ﺄ":"lٴ","ﺃ":"lٴ","ٲ":"lٴ","ٵ":"lٴ","ﷳ":"lكبر","ﷲ":"lللّٰo","㏠":"l日","㋀":"l月","㍙":"l点","ⳑ":"ʟ","ꮮ":"ʟ","𐑃":"ʟ","Ｍ":"M","Ⅿ":"M","ℳ":"M","𝐌":"M","𝑀":"M","𝑴":"M","𝓜":"M","𝔐":"M","𝕄":"M","𝕸":"M","𝖬":"M","𝗠":"M","𝘔":"M","𝙈":"M","𝙼":"M","Μ":"M","𝚳":"M","𝛭":"M","𝜧":"M","𝝡":"M","𝞛":"M","Ϻ":"M","Ⲙ":"M","М":"M","Ꮇ":"M","ᗰ":"M","ᛖ":"M","ꓟ":"M","𐊰":"M","𐌑":"M","Ӎ":"M̦","🝫":"MB","ⷨ":"ᷟ","𝐧":"n","𝑛":"n","𝒏":"n","𝓃":"n","𝓷":"n","𝔫":"n","𝕟":"n","𝖓":"n","𝗇":"n","𝗻":"n","𝘯":"n","𝙣":"n","𝚗":"n","ո":"n","ռ":"n","Ｎ":"N","ℕ":"N","𝐍":"N","𝑁":"N","𝑵":"N","𝒩":"N","𝓝":"N","𝔑":"N","𝕹":"N","𝖭":"N","𝗡":"N","𝘕":"N","𝙉":"N","𝙽":"N","Ν":"N","𝚴":"N","𝛮":"N","𝜨":"N","𝝢":"N","𝞜":"N","Ⲛ":"N","ꓠ":"N","𐔓":"N","𐆎":"N̊","ɳ":"n̨","ƞ":"n̩","η":"n̩","𝛈":"n̩","𝜂":"n̩","𝜼":"n̩","𝝶":"n̩","𝞰":"n̩","Ɲ":"N̦","ᵰ":"n̴","ǌ":"nj","ǋ":"Nj","Ǌ":"NJ","№":"No","ͷ":"ᴎ","и":"ᴎ","𐑍":"ᴎ","ņ":"ɲ","ం":"o","ಂ":"o","ം":"o","ං":"o","०":"o","੦":"o","૦":"o","௦":"o","౦":"o","೦":"o","൦":"o","๐":"o","໐":"o","၀":"o","٥":"o","۵":"o","ｏ":"o","ℴ":"o","𝐨":"o","𝑜":"o","𝒐":"o","𝓸":"o","𝔬":"o","𝕠":"o","𝖔":"o","𝗈":"o","𝗼":"o","𝘰":"o","𝙤":"o","𝚘":"o","ᴏ":"o","ᴑ":"o","ꬽ":"o","ο":"o","𝛐":"o","𝜊":"o","𝝄":"o","𝝾":"o","𝞸":"o","σ":"o","𝛔":"o","𝜎":"o","𝝈":"o","𝞂":"o","𝞼":"o","ⲟ":"o","о":"o","ჿ":"o","օ":"o","ס":"o","ه":"o","𞸤":"o","𞹤":"o","𞺄":"o","ﻫ":"o","ﻬ":"o","ﻪ":"o","ﻩ":"o","ھ":"o","ﮬ":"o","ﮭ":"o","ﮫ":"o","ﮪ":"o","ہ":"o","ﮨ":"o","ﮩ":"o","ﮧ":"o","ﮦ":"o","ە":"o","ഠ":"o","ဝ":"o","𐓪":"o","𑣈":"o","𑣗":"o","𐐬":"o","߀":"O","০":"O","୦":"O","〇":"O","𑓐":"O","𑣠":"O","𝟎":"O","𝟘":"O","𝟢":"O","𝟬":"O","𝟶":"O","🯰":"O","Ｏ":"O","𝐎":"O","𝑂":"O","𝑶":"O","𝒪":"O","𝓞":"O","𝔒":"O","𝕆":"O","𝕺":"O","𝖮":"O","𝗢":"O","𝘖":"O","𝙊":"O","𝙾":"O","Ο":"O","𝚶":"O","𝛰":"O","𝜪":"O","𝝤":"O","𝞞":"O","Ⲟ":"O","О":"O","Օ":"O","ⵔ":"O","ዐ":"O","ଠ":"O","𐓂":"O","ꓳ":"O","𑢵":"O","𐊒":"O","𐊫":"O","𐐄":"O","𐔖":"O","⁰":"º","ᵒ":"º","ǒ":"ŏ","Ǒ":"Ŏ","ۿ":"ô","Ő":"Ö","ø":"o̸","ꬾ":"o̸","Ø":"O̸","ⵁ":"O̸","Ǿ":"Ó̸","ɵ":"o̵","ꝋ":"o̵","ө":"o̵","ѳ":"o̵","ꮎ":"o̵","ꮻ":"o̵","⊖":"O̵","⊝":"O̵","⍬":"O̵","𝈚":"O̵","🜔":"O̵","Ɵ":"O̵","Ꝋ":"O̵","θ":"O̵","ϑ":"O̵","𝛉":"O̵","𝛝":"O̵","𝜃":"O̵","𝜗":"O̵","𝜽":"O̵","𝝑":"O̵","𝝷":"O̵","𝞋":"O̵","𝞱":"O̵","𝟅":"O̵","Θ":"O̵","ϴ":"O̵","𝚯":"O̵","𝚹":"O̵","𝛩":"O̵","𝛳":"O̵","𝜣":"O̵","𝜭":"O̵","𝝝":"O̵","𝝧":"O̵","𝞗":"O̵","𝞡":"O̵","Ө":"O̵","Ѳ":"O̵","ⴱ":"O̵","Ꮎ":"O̵","Ꮻ":"O̵","ꭴ":"ơ","ﳙ":"oٰ","🄁":"O,","🄀":"O.","ơ":"o\'","Ơ":"O\'","Ꭴ":"O\'","%":"º/₀","٪":"º/₀","⁒":"º/₀","‰":"º/₀₀","؉":"º/₀₀","‱":"º/₀₀₀","؊":"º/₀₀₀","œ":"oe","Œ":"OE","ɶ":"oᴇ","∞":"oo","ꝏ":"oo","ꚙ":"oo","Ꝏ":"OO","Ꚙ":"OO","ﳗ":"oج","ﱑ":"oج","ﳘ":"oم","ﱒ":"oم","ﶓ":"oمج","ﶔ":"oمم","ﱓ":"oى","ﱔ":"oى","ൟ":"oരo","တ":"oာ","㍘":"O点","ↄ":"ɔ","ᴐ":"ɔ","ͻ":"ɔ","𐑋":"ɔ","Ↄ":"Ɔ","Ͻ":"Ɔ","ꓛ":"Ɔ","𐐣":"Ɔ","ꬿ":"ɔ̸","ꭢ":"ɔe","𐐿":"ɷ","⍴":"p","ｐ":"p","𝐩":"p","𝑝":"p","𝒑":"p","𝓅":"p","𝓹":"p","𝔭":"p","𝕡":"p","𝖕":"p","𝗉":"p","𝗽":"p","𝘱":"p","𝙥":"p","𝚙":"p","ρ":"p","ϱ":"p","𝛒":"p","𝛠":"p","𝜌":"p","𝜚":"p","𝝆":"p","𝝔":"p","𝞀":"p","𝞎":"p","𝞺":"p","𝟈":"p","ⲣ":"p","р":"p","Ｐ":"P","ℙ":"P","𝐏":"P","𝑃":"P","𝑷":"P","𝒫":"P","𝓟":"P","𝔓":"P","𝕻":"P","𝖯":"P","𝗣":"P","𝘗":"P","𝙋":"P","𝙿":"P","Ρ":"P","𝚸":"P","𝛲":"P","𝜬":"P","𝝦":"P","𝞠":"P","Ⲣ":"P","Р":"P","Ꮲ":"P","ᑭ":"P","ꓑ":"P","𐊕":"P","ƥ":"p̔","ᵽ":"p̵","ᑷ":"p·","ᒆ":"P\'","ᴩ":"ᴘ","ꮲ":"ᴘ","φ":"ɸ","ϕ":"ɸ","𝛗":"ɸ","𝛟":"ɸ","𝜑":"ɸ","𝜙":"ɸ","𝝋":"ɸ","𝝓":"ɸ","𝞅":"ɸ","𝞍":"ɸ","𝞿":"ɸ","𝟇":"ɸ","ⲫ":"ɸ","ф":"ɸ","𝐪":"q","𝑞":"q","𝒒":"q","𝓆":"q","𝓺":"q","𝔮":"q","𝕢":"q","𝖖":"q","𝗊":"q","𝗾":"q","𝘲":"q","𝙦":"q","𝚚":"q","ԛ":"q","գ":"q","զ":"q","ℚ":"Q","𝐐":"Q","𝑄":"Q","𝑸":"Q","𝒬":"Q","𝓠":"Q","𝔔":"Q","𝕼":"Q","𝖰":"Q","𝗤":"Q","𝘘":"Q","𝙌":"Q","𝚀":"Q","ⵕ":"Q","ʠ":"q̔","🜀":"QE","ᶐ":"ɋ","ᴋ":"ĸ","κ":"ĸ","ϰ":"ĸ","𝛋":"ĸ","𝛞":"ĸ","𝜅":"ĸ","𝜘":"ĸ","𝜿":"ĸ","𝝒":"ĸ","𝝹":"ĸ","𝞌":"ĸ","𝞳":"ĸ","𝟆":"ĸ","ⲕ":"ĸ","к":"ĸ","ꮶ":"ĸ","қ":"ĸ̩","ҟ":"ĸ̵","𝐫":"r","𝑟":"r","𝒓":"r","𝓇":"r","𝓻":"r","𝔯":"r","𝕣":"r","𝖗":"r","𝗋":"r","𝗿":"r","𝘳":"r","𝙧":"r","𝚛":"r","ꭇ":"r","ꭈ":"r","ᴦ":"r","ⲅ":"r","г":"r","ꮁ":"r","𝈖":"R","ℛ":"R","ℜ":"R","ℝ":"R","𝐑":"R","𝑅":"R","𝑹":"R","𝓡":"R","𝕽":"R","𝖱":"R","𝗥":"R","𝘙":"R","𝙍":"R","𝚁":"R","Ʀ":"R","Ꭱ":"R","Ꮢ":"R","𐒴":"R","ᖇ":"R","ꓣ":"R","𖼵":"R","ɽ":"r̨","ɼ":"r̩","ɍ":"r̵","ғ":"r̵","ᵲ":"r̴","ґ":"r\'","𑣣":"rn","m":"rn","ⅿ":"rn","𝐦":"rn","𝑚":"rn","𝒎":"rn","𝓂":"rn","𝓶":"rn","𝔪":"rn","𝕞":"rn","𝖒":"rn","𝗆":"rn","𝗺":"rn","𝘮":"rn","𝙢":"rn","𝚖":"rn","𑜀":"rn","₥":"rn̸","ɱ":"rn̦","ᵯ":"rn̴","₨":"Rs","ꭱ":"ʀ","ꮢ":"ʀ","я":"ᴙ","ᵳ":"ɾ̴","℩":"ɿ","ｓ":"s","𝐬":"s","𝑠":"s","𝒔":"s","𝓈":"s","𝓼":"s","𝔰":"s","𝕤":"s","𝖘":"s","𝗌":"s","𝘀":"s","𝘴":"s","𝙨":"s","𝚜":"s","ꜱ":"s","ƽ":"s","ѕ":"s","ꮪ":"s","𑣁":"s","𐑈":"s","Ｓ":"S","𝐒":"S","𝑆":"S","𝑺":"S","𝒮":"S","𝓢":"S","𝔖":"S","𝕊":"S","𝕾":"S","𝖲":"S","𝗦":"S","𝘚":"S","𝙎":"S","𝚂":"S","Ѕ":"S","Տ":"S","Ꮥ":"S","Ꮪ":"S","ꓢ":"S","𖼺":"S","𐊖":"S","𐐠":"S","ʂ":"s̨","ᵴ":"s̴","ꞵ":"ß","β":"ß","ϐ":"ß","𝛃":"ß","𝛽":"ß","𝜷":"ß","𝝱":"ß","𝞫":"ß","Ᏸ":"ß","🝜":"sss","ﬆ":"st","∫":"ʃ","ꭍ":"ʃ","∑":"Ʃ","⅀":"Ʃ","Σ":"Ʃ","𝚺":"Ʃ","𝛴":"Ʃ","𝜮":"Ʃ","𝝨":"Ʃ","𝞢":"Ʃ","ⵉ":"Ʃ","∬":"ʃʃ","∭":"ʃʃʃ","⨌":"ʃʃʃʃ","𝐭":"t","𝑡":"t","𝒕":"t","𝓉":"t","𝓽":"t","𝔱":"t","𝕥":"t","𝖙":"t","𝗍":"t","𝘁":"t","𝘵":"t","𝙩":"t","𝚝":"t","⊤":"T","⟙":"T","🝨":"T","Ｔ":"T","𝐓":"T","𝑇":"T","𝑻":"T","𝒯":"T","𝓣":"T","𝔗":"T","𝕋":"T","𝕿":"T","𝖳":"T","𝗧":"T","𝘛":"T","𝙏":"T","𝚃":"T","Τ":"T","𝚻":"T","𝛵":"T","𝜯":"T","𝝩":"T","𝞣":"T","Ⲧ":"T","Т":"T","Ꭲ":"T","ꓔ":"T","𖼊":"T","𑢼":"T","𐊗":"T","𐊱":"T","𐌕":"T","ƭ":"t̔","⍡":"T̈","Ⱦ":"T̸","Ț":"Ţ","Ʈ":"T̨","Ҭ":"T̩","₮":"T⃫","ŧ":"t̵","Ŧ":"T̵","ᵵ":"t̴","Ⴀ":"Ꞇ","Ꜩ":"T3","ʨ":"tɕ","℡":"TEL","ꝷ":"tf","ʦ":"ts","ʧ":"tʃ","ꜩ":"tȝ","τ":"ᴛ","𝛕":"ᴛ","𝜏":"ᴛ","𝝉":"ᴛ","𝞃":"ᴛ","𝞽":"ᴛ","т":"ᴛ","ꭲ":"ᴛ","ҭ":"ᴛ̩","ţ":"ƫ","ț":"ƫ","Ꮏ":"ƫ","𝐮":"u","𝑢":"u","𝒖":"u","𝓊":"u","𝓾":"u","𝔲":"u","𝕦":"u","𝖚":"u","𝗎":"u","𝘂":"u","𝘶":"u","𝙪":"u","𝚞":"u","ꞟ":"u","ᴜ":"u","ꭎ":"u","ꭒ":"u","ʋ":"u","υ":"u","𝛖":"u","𝜐":"u","𝝊":"u","𝞄":"u","𝞾":"u","ս":"u","𐓶":"u","𑣘":"u","∪":"U","⋃":"U","𝐔":"U","𝑈":"U","𝑼":"U","𝒰":"U","𝓤":"U","𝔘":"U","𝕌":"U","𝖀":"U","𝖴":"U","𝗨":"U","𝘜":"U","𝙐":"U","𝚄":"U","Ս":"U","ሀ":"U","𐓎":"U","ᑌ":"U","ꓴ":"U","𖽂":"U","𑢸":"U","ǔ":"ŭ","Ǔ":"Ŭ","ᵾ":"u̵","ꮜ":"u̵","Ʉ":"U̵","Ꮜ":"U̵","ᑘ":"U·","ᑧ":"U\'","ᵫ":"ue","ꭣ":"uo","ṃ":"ꭑ","պ":"ɰ","ሣ":"ɰ","℧":"Ʊ","ᘮ":"Ʊ","ᘴ":"Ʊ","ᵿ":"ʊ̵","∨":"v","⋁":"v","ｖ":"v","ⅴ":"v","𝐯":"v","𝑣":"v","𝒗":"v","𝓋":"v","𝓿":"v","𝔳":"v","𝕧":"v","𝖛":"v","𝗏":"v","𝘃":"v","𝘷":"v","𝙫":"v","𝚟":"v","ᴠ":"v","ν":"v","𝛎":"v","𝜈":"v","𝝂":"v","𝝼":"v","𝞶":"v","ѵ":"v","ט":"v","𑜆":"v","ꮩ":"v","𑣀":"v","𝈍":"V","٧":"V","۷":"V","Ⅴ":"V","𝐕":"V","𝑉":"V","𝑽":"V","𝒱":"V","𝓥":"V","𝔙":"V","𝕍":"V","𝖁":"V","𝖵":"V","𝗩":"V","𝘝":"V","𝙑":"V","𝚅":"V","Ѵ":"V","ⴸ":"V","Ꮩ":"V","ᐯ":"V","ꛟ":"V","ꓦ":"V","𖼈":"V","𑢠":"V","𐔝":"V","𐆗":"V̵","ᐻ":"V·","🝬":"VB","ⅵ":"vi","ⅶ":"vii","ⅷ":"viii","Ⅵ":"Vl","Ⅶ":"Vll","Ⅷ":"Vlll","🜈":"Vᷤ","ᴧ":"ʌ","𐓘":"ʌ","٨":"Ʌ","۸":"Ʌ","Λ":"Ʌ","𝚲":"Ʌ","𝛬":"Ʌ","𝜦":"Ʌ","𝝠":"Ʌ","𝞚":"Ʌ","Л":"Ʌ","ⴷ":"Ʌ","𐒰":"Ʌ","ᐱ":"Ʌ","ꛎ":"Ʌ","ꓥ":"Ʌ","𖼽":"Ʌ","𐊍":"Ʌ","Ӆ":"Ʌ̦","ᐽ":"Ʌ·","ɯ":"w","𝐰":"w","𝑤":"w","𝒘":"w","𝓌":"w","𝔀":"w","𝔴":"w","𝕨":"w","𝖜":"w","𝗐":"w","𝘄":"w","𝘸":"w","𝙬":"w","𝚠":"w","ᴡ":"w","ѡ":"w","ԝ":"w","ա":"w","𑜊":"w","𑜎":"w","𑜏":"w","ꮃ":"w","𑣯":"W","𑣦":"W","𝐖":"W","𝑊":"W","𝑾":"W","𝒲":"W","𝓦":"W","𝔚":"W","𝕎":"W","𝖂":"W","𝖶":"W","𝗪":"W","𝘞":"W","𝙒":"W","𝚆":"W","Ԝ":"W","Ꮃ":"W","Ꮤ":"W","ꓪ":"W","ѽ":"w҆҇","𑓅":"ẇ","₩":"W̵","ꝡ":"w̦","ᴍ":"ʍ","м":"ʍ","ꮇ":"ʍ","ӎ":"ʍ̦","᙮":"x","×":"x","⤫":"x","⤬":"x","⨯":"x","ｘ":"x","ⅹ":"x","𝐱":"x","𝑥":"x","𝒙":"x","𝓍":"x","𝔁":"x","𝔵":"x","𝕩":"x","𝖝":"x","𝗑":"x","𝘅":"x","𝘹":"x","𝙭":"x","𝚡":"x","х":"x","ᕁ":"x","ᕽ":"x","ⷯ":"ͯ","᙭":"X","╳":"X","𐌢":"X","𑣬":"X","Ｘ":"X","Ⅹ":"X","𝐗":"X","𝑋":"X","𝑿":"X","𝒳":"X","𝓧":"X","𝔛":"X","𝕏":"X","𝖃":"X","𝖷":"X","𝗫":"X","𝘟":"X","𝙓":"X","𝚇":"X","Ꭓ":"X","Χ":"X","𝚾":"X","𝛸":"X","𝜲":"X","𝝬":"X","𝞦":"X","Ⲭ":"X","Х":"X","ⵝ":"X","ᚷ":"X","ꓫ":"X","𐊐":"X","𐊴":"X","𐌗":"X","𐔧":"X","⨰":"ẋ","Ҳ":"X̩","𐆖":"X̵","ⅺ":"xi","ⅻ":"xii","Ⅺ":"Xl","Ⅻ":"Xll","ɣ":"y","ᶌ":"y","ｙ":"y","𝐲":"y","𝑦":"y","𝒚":"y","𝓎":"y","𝔂":"y","𝔶":"y","𝕪":"y","𝖞":"y","𝗒":"y","𝘆":"y","𝘺":"y","𝙮":"y","𝚢":"y","ʏ":"y","ỿ":"y","ꭚ":"y","γ":"y","ℽ":"y","𝛄":"y","𝛾":"y","𝜸":"y","𝝲":"y","𝞬":"y","у":"y","ү":"y","ყ":"y","𑣜":"y","Ｙ":"Y","𝐘":"Y","𝑌":"Y","𝒀":"Y","𝒴":"Y","𝓨":"Y","𝔜":"Y","𝕐":"Y","𝖄":"Y","𝖸":"Y","𝗬":"Y","𝘠":"Y","𝙔":"Y","𝚈":"Y","Υ":"Y","ϒ":"Y","𝚼":"Y","𝛶":"Y","𝜰":"Y","𝝪":"Y","𝞤":"Y","Ⲩ":"Y","У":"Y","Ү":"Y","Ꭹ":"Y","Ꮍ":"Y","ꓬ":"Y","𖽃":"Y","𑢤":"Y","𐊲":"Y","ƴ":"y̔","ɏ":"y̵","ұ":"y̵","¥":"Y̵","Ɏ":"Y̵","Ұ":"Y̵","ʒ":"ȝ","ꝫ":"ȝ","ⳍ":"ȝ","ӡ":"ȝ","ჳ":"ȝ","𝐳":"z","𝑧":"z","𝒛":"z","𝓏":"z","𝔃":"z","𝔷":"z","𝕫":"z","𝖟":"z","𝗓":"z","𝘇":"z","𝘻":"z","𝙯":"z","𝚣":"z","ᴢ":"z","ꮓ":"z","𑣄":"z","𐋵":"Z","𑣥":"Z","Ｚ":"Z","ℤ":"Z","ℨ":"Z","𝐙":"Z","𝑍":"Z","𝒁":"Z","𝒵":"Z","𝓩":"Z","𝖅":"Z","𝖹":"Z","𝗭":"Z","𝘡":"Z","𝙕":"Z","𝚉":"Z","Ζ":"Z","𝚭":"Z","𝛧":"Z","𝜡":"Z","𝝛":"Z","𝞕":"Z","Ꮓ":"Z","ꓜ":"Z","𑢩":"Z","ʐ":"z̨","ƶ":"z̵","Ƶ":"Z̵","ȥ":"z̦","Ȥ":"Z̦","ᵶ":"z̴","ƿ":"þ","ϸ":"þ","Ϸ":"Þ","𐓄":"Þ","⁹":"ꝰ","ᴤ":"ƨ","ϩ":"ƨ","ꙅ":"ƨ","ь":"ƅ","ꮟ":"ƅ","ы":"ƅi","ꭾ":"ɂ","ˤ":"ˁ","ꛍ":"ʡ","⊙":"ʘ","☉":"ʘ","⨀":"ʘ","Ꙩ":"ʘ","ⵙ":"ʘ","𐓃":"ʘ","ℾ":"Γ","𝚪":"Γ","𝛤":"Γ","𝜞":"Γ","𝝘":"Γ","𝞒":"Γ","Ⲅ":"Γ","Г":"Γ","Ꮁ":"Γ","ᒥ":"Γ","𖼇":"Γ","Ғ":"Γ̵","ᒯ":"Γ·","Ґ":"Γ\'","∆":"Δ","△":"Δ","🜂":"Δ","𝚫":"Δ","𝛥":"Δ","𝜟":"Δ","𝝙":"Δ","𝞓":"Δ","Ⲇ":"Δ","ⵠ":"Δ","ᐃ":"Δ","𖼚":"Δ","𐊅":"Δ","𐊣":"Δ","⍙":"Δ̲","ᐏ":"Δ·","ᐬ":"Δᐠ","𝟋":"ϝ","𝛇":"ζ","𝜁":"ζ","𝜻":"ζ","𝝵":"ζ","𝞯":"ζ","ⳤ":"ϗ","𝛌":"λ","𝜆":"λ","𝝀":"λ","𝝺":"λ","𝞴":"λ","Ⲗ":"λ","𐓛":"λ","µ":"μ","𝛍":"μ","𝜇":"μ","𝝁":"μ","𝝻":"μ","𝞵":"μ","𝛏":"ξ","𝜉":"ξ","𝝃":"ξ","𝝽":"ξ","𝞷":"ξ","𝚵":"Ξ","𝛯":"Ξ","𝜩":"Ξ","𝝣":"Ξ","𝞝":"Ξ","ϖ":"π","ℼ":"π","𝛑":"π","𝛡":"π","𝜋":"π","𝜛":"π","𝝅":"π","𝝕":"π","𝝿":"π","𝞏":"π","𝞹":"π","𝟉":"π","ᴨ":"π","п":"π","∏":"Π","ℿ":"Π","𝚷":"Π","𝛱":"Π","𝜫":"Π","𝝥":"Π","𝞟":"Π","Ⲡ":"Π","П":"Π","ꛛ":"Π","𐊭":"Ϙ","𐌒":"Ϙ","ϛ":"ς","𝛓":"ς","𝜍":"ς","𝝇":"ς","𝞁":"ς","𝞻":"ς","𝚽":"Φ","𝛷":"Φ","𝜱":"Φ","𝝫":"Φ","𝞥":"Φ","Ⲫ":"Φ","Ф":"Φ","Փ":"Φ","ቀ":"Φ","ᛰ":"Φ","𐊳":"Φ","ꭓ":"χ","ꭕ":"χ","𝛘":"χ","𝜒":"χ","𝝌":"χ","𝞆":"χ","𝟀":"χ","ⲭ":"χ","𝛙":"ψ","𝜓":"ψ","𝝍":"ψ","𝞇":"ψ","𝟁":"ψ","ѱ":"ψ","𐓹":"ψ","𝚿":"Ψ","𝛹":"Ψ","𝜳":"Ψ","𝝭":"Ψ","𝞧":"Ψ","Ⲯ":"Ψ","Ѱ":"Ψ","𐓑":"Ψ","ᛘ":"Ψ","𐊵":"Ψ","⍵":"ω","ꞷ":"ω","𝛚":"ω","𝜔":"ω","𝝎":"ω","𝞈":"ω","𝟂":"ω","ⲱ":"ω","ꙍ":"ω","Ω":"Ω","𝛀":"Ω","𝛺":"Ω","𝜴":"Ω","𝝮":"Ω","𝞨":"Ω","ᘯ":"Ω","ᘵ":"Ω","𐊶":"Ω","⍹":"ω̲","ώ":"ῴ","☰":"Ⲷ","Ⳝ":"Ϭ","җ":"ж̩","Җ":"Ж̩","𝈋":"И","Ͷ":"И","ꚡ":"И","𐐥":"И","Й":"Ѝ","Ҋ":"Ѝ̦","ѝ":"й","ҋ":"й̦","𐒼":"Ӄ","ᴫ":"л","ӆ":"л̦","ꭠ":"љ","𐓫":"ꙩ","ᷮ":"ⷬ","𐓍":"Ћ","𝈂":"Ӿ","𝈢":"Ѡ","Ꮗ":"Ѡ","ᗯ":"Ѡ","Ѽ":"Ѡ҆҇","ᣭ":"Ѡ·","Ꞷ":"Ꙍ","ӌ":"ҷ","Ӌ":"Ҷ","Ҿ":"Ҽ̨","ⲽ":"ш","Ⲽ":"Ш","Ꙑ":"Ъl","℈":"Э","🜁":"Ꙙ","𖼜":"Ꙙ","ꦒ":"ⰿ","և":"եւ","ኔ":"ձ","ﬔ":"մե","ﬕ":"մի","ﬗ":"մխ","ﬓ":"մն","∩":"Ո","⋂":"Ո","𝉅":"Ո","በ":"Ո","ᑎ":"Ո","ꓵ":"Ո","ᑚ":"Ո·","ᑨ":"Ո\'","ﬖ":"վն","₽":"Ք","˓":"ՙ","ʿ":"ՙ","ℵ":"א","ﬡ":"א","אָ":"אַ","אּ":"אַ","ﭏ":"אל","ℶ":"ב","ℷ":"ג","ℸ":"ד","ﬢ":"ד","ﬣ":"ה","יּ":"יִ","ﬤ":"כ","ﬥ":"ל","ﬦ":"ם","ﬠ":"ע","ﬧ":"ר","שׂ":"שׁ","שּ":"שׁ","שּׂ":"שּׁ","ﬨ":"ת","ﺀ":"ء","۽":"ء͈","ﺂ":"آ","ﺁ":"آ","ﭑ":"ٱ","ﭐ":"ٱ","𞸁":"ب","𞸡":"ب","𞹡":"ب","𞺁":"ب","𞺡":"ب","ﺑ":"ب","ﺒ":"ب","ﺐ":"ب","ﺏ":"ب","ݑ":"بۛ","ࢶ":"بۢ","ࢡ":"بٔ","ﲠ":"بo","ﳢ":"بo","ﲜ":"بج","ﰅ":"بج","ﲝ":"بح","ﰆ":"بح","ﷂ":"بحى","ﲞ":"بخ","ﰇ":"بخ","ﳒ":"بخ","ﱋ":"بخ","ﶞ":"بخى","ﱪ":"بر","ﱫ":"بز","ﲟ":"بم","ﳡ":"بم","ﱬ":"بم","ﰈ":"بم","ﱭ":"بن","ﱮ":"بى","ﰉ":"بى","ﱯ":"بى","ﰊ":"بى","ﭔ":"ٻ","ﭕ":"ٻ","ﭓ":"ٻ","ﭒ":"ٻ","ې":"ٻ","ﯦ":"ٻ","ﯧ":"ٻ","ﯥ":"ٻ","ﯤ":"ٻ","ﭜ":"ڀ","ﭝ":"ڀ","ﭛ":"ڀ","ﭚ":"ڀ","ࢩ":"ݔ","ݧ":"ݔ","⍥":"ة","ö":"ة","ﺔ":"ة","ﺓ":"ة","ۃ":"ة","𞸕":"ت","𞸵":"ت","𞹵":"ت","𞺕":"ت","𞺵":"ت","ﺗ":"ت","ﺘ":"ت","ﺖ":"ت","ﺕ":"ت","ﲥ":"تo","ﳤ":"تo","ﲡ":"تج","ﰋ":"تج","ﵐ":"تجم","ﶠ":"تجى","ﶟ":"تجى","ﲢ":"تح","ﰌ":"تح","ﵒ":"تحج","ﵑ":"تحج","ﵓ":"تحم","ﲣ":"تخ","ﰍ":"تخ","ﵔ":"تخم","ﶢ":"تخى","ﶡ":"تخى","ﱰ":"تر","ﱱ":"تز","ﲤ":"تم","ﳣ":"تم","ﱲ":"تم","ﰎ":"تم","ﵕ":"تمج","ﵖ":"تمح","ﵗ":"تمخ","ﶤ":"تمى","ﶣ":"تمى","ﱳ":"تن","ﱴ":"تى","ﰏ":"تى","ﱵ":"تى","ﰐ":"تى","ﭠ":"ٺ","ﭡ":"ٺ","ﭟ":"ٺ","ﭞ":"ٺ","ﭤ":"ٿ","ﭥ":"ٿ","ﭣ":"ٿ","ﭢ":"ٿ","𞸂":"ج","𞸢":"ج","𞹂":"ج","𞹢":"ج","𞺂":"ج","𞺢":"ج","ﺟ":"ج","ﺠ":"ج","ﺞ":"ج","ﺝ":"ج","ﲧ":"جح","ﰕ":"جح","ﶦ":"جحى","ﶾ":"جحى","ﷻ":"جل جلlلo","ﲨ":"جم","ﰖ":"جم","ﵙ":"جمح","ﵘ":"جمح","ﶧ":"جمى","ﶥ":"جمى","ﴝ":"جى","ﴁ":"جى","ﴞ":"جى","ﴂ":"جى","ﭸ":"ڃ","ﭹ":"ڃ","ﭷ":"ڃ","ﭶ":"ڃ","ﭴ":"ڄ","ﭵ":"ڄ","ﭳ":"ڄ","ﭲ":"ڄ","ﭼ":"چ","ﭽ":"چ","ﭻ":"چ","ﭺ":"چ","ﮀ":"ڇ","ﮁ":"ڇ","ﭿ":"ڇ","ﭾ":"ڇ","𞸇":"ح","𞸧":"ح","𞹇":"ح","𞹧":"ح","𞺇":"ح","𞺧":"ح","ﺣ":"ح","ﺤ":"ح","ﺢ":"ح","ﺡ":"ح","څ":"حۛ","ځ":"حٔ","ݲ":"حٔ","ﲩ":"حج","ﰗ":"حج","ﶿ":"حجى","ﲪ":"حم","ﰘ":"حم","ﵛ":"حمى","ﵚ":"حمى","ﴛ":"حى","ﳿ":"حى","ﴜ":"حى","ﴀ":"حى","𞸗":"خ","𞸷":"خ","𞹗":"خ","𞹷":"خ","𞺗":"خ","𞺷":"خ","ﺧ":"خ","ﺨ":"خ","ﺦ":"خ","ﺥ":"خ","ﲫ":"خج","ﰙ":"خج","ﰚ":"خح","ﲬ":"خم","ﰛ":"خم","ﴟ":"خى","ﴃ":"خى","ﴠ":"خى","ﴄ":"خى","𐋡":"د","𞸃":"د","𞺃":"د","𞺣":"د","ﺪ":"د","ﺩ":"د","ڈ":"دؕ","ﮉ":"دؕ","ﮈ":"دؕ","ڎ":"دۛ","ﮇ":"دۛ","ﮆ":"دۛ","ۮ":"د̂","ࢮ":"د̤̣","𞸘":"ذ","𞺘":"ذ","𞺸":"ذ","ﺬ":"ذ","ﺫ":"ذ","ﱛ":"ذٰ","ڋ":"ڊؕ","ﮅ":"ڌ","ﮄ":"ڌ","ﮃ":"ڍ","ﮂ":"ڍ","𞸓":"ر","𞺓":"ر","𞺳":"ر","ﺮ":"ر","ﺭ":"ر","ڑ":"رؕ","ﮍ":"رؕ","ﮌ":"رؕ","ژ":"رۛ","ﮋ":"رۛ","ﮊ":"رۛ","ڒ":"ر̆","ࢹ":"ر̆̇","ۯ":"ر̂","ݬ":"رٔ","ﱜ":"رٰ","ﷶ":"رسول","﷼":"رىlل","𞸆":"ز","𞺆":"ز","𞺦":"ز","ﺰ":"ز","ﺯ":"ز","ࢲ":"ز̂","ݱ":"ڗؕ","𞸎":"س","𞸮":"س","𞹎":"س","𞹮":"س","𞺎":"س","𞺮":"س","ﺳ":"س","ﺴ":"س","ﺲ":"س","ﺱ":"س","ش":"سۛ","𞸔":"سۛ","𞸴":"سۛ","𞹔":"سۛ","𞹴":"سۛ","𞺔":"سۛ","𞺴":"سۛ","ﺷ":"سۛ","ﺸ":"سۛ","ﺶ":"سۛ","ﺵ":"سۛ","ݾ":"س̂","ﴱ":"سo","ﳨ":"سo","ﴲ":"سۛo","ﳪ":"سۛo","ﲭ":"سج","ﴴ":"سج","ﰜ":"سج","ﴭ":"سۛج","ﴷ":"سۛج","ﴥ":"سۛج","ﴉ":"سۛج","ﵝ":"سجح","ﵞ":"سجى","ﵩ":"سۛجى","ﲮ":"سح","ﴵ":"سح","ﰝ":"سح","ﴮ":"سۛح","ﴸ":"سۛح","ﴦ":"سۛح","ﴊ":"سۛح","ﵜ":"سحج","ﵨ":"سۛحم","ﵧ":"سۛحم","ﶪ":"سۛحى","ﲯ":"سخ","ﴶ":"سخ","ﰞ":"سخ","ﴯ":"سۛخ","ﴹ":"سۛخ","ﴧ":"سۛخ","ﴋ":"سۛخ","ﶨ":"سخى","ﷆ":"سخى","ﴪ":"سر","ﴎ":"سر","ﴩ":"سۛر","ﴍ":"سۛر","ﲰ":"سم","ﳧ":"سم","ﰟ":"سم","ﴰ":"سۛم","ﳩ":"سۛم","ﴨ":"سۛم","ﴌ":"سۛم","ﵡ":"سمج","ﵠ":"سمح","ﵟ":"سمح","ﵫ":"سۛمخ","ﵪ":"سۛمخ","ﵣ":"سمم","ﵢ":"سمم","ﵭ":"سۛمم","ﵬ":"سۛمم","ﴗ":"سى","ﳻ":"سى","ﴘ":"سى","ﳼ":"سى","ﴙ":"سۛى","ﳽ":"سۛى","ﴚ":"سۛى","ﳾ":"سۛى","𐋲":"ص","𞸑":"ص","𞸱":"ص","𞹑":"ص","𞹱":"ص","𞺑":"ص","𞺱":"ص","ﺻ":"ص","ﺼ":"ص","ﺺ":"ص","ﺹ":"ص","ڞ":"صۛ","ࢯ":"ص̤̣","ﲱ":"صح","ﰠ":"صح","ﵥ":"صحح","ﵤ":"صحح","ﶩ":"صحى","ﲲ":"صخ","ﴫ":"صر","ﴏ":"صر","ﷵ":"صلعم","ﷹ":"صلى","ﷰ":"صلى","ﷺ":"صلى lللo علىo وسلم","ﲳ":"صم","ﰡ":"صم","ﷅ":"صمم","ﵦ":"صمم","ﴡ":"صى","ﴅ":"صى","ﴢ":"صى","ﴆ":"صى","𞸙":"ض","𞸹":"ض","𞹙":"ض","𞹹":"ض","𞺙":"ض","𞺹":"ض","ﺿ":"ض","ﻀ":"ض","ﺾ":"ض","ﺽ":"ض","ﲴ":"ضج","ﰢ":"ضج","ﲵ":"ضح","ﰣ":"ضح","ﵮ":"ضحى","ﶫ":"ضحى","ﲶ":"ضخ","ﰤ":"ضخ","ﵰ":"ضخم","ﵯ":"ضخم","ﴬ":"ضر","ﴐ":"ضر","ﲷ":"ضم","ﰥ":"ضم","ﴣ":"ضى","ﴇ":"ضى","ﴤ":"ضى","ﴈ":"ضى","𐋨":"ط","𞸈":"ط","𞹨":"ط","𞺈":"ط","𞺨":"ط","ﻃ":"ط","ﻄ":"ط","ﻂ":"ط","ﻁ":"ط","ڟ":"طۛ","ﲸ":"طح","ﰦ":"طح","ﴳ":"طم","ﴺ":"طم","ﰧ":"طم","ﵲ":"طمح","ﵱ":"طمح","ﵳ":"طمم","ﵴ":"طمى","ﴑ":"طى","ﳵ":"طى","ﴒ":"طى","ﳶ":"طى","𞸚":"ظ","𞹺":"ظ","𞺚":"ظ","𞺺":"ظ","ﻇ":"ظ","ﻈ":"ظ","ﻆ":"ظ","ﻅ":"ظ","ﲹ":"ظم","ﴻ":"ظم","ﰨ":"ظم","؏":"ع","𞸏":"ع","𞸯":"ع","𞹏":"ع","𞹯":"ع","𞺏":"ع","𞺯":"ع","ﻋ":"ع","ﻌ":"ع","ﻊ":"ع","ﻉ":"ع","ﲺ":"عج","ﰩ":"عج","ﷄ":"عجم","ﵵ":"عجم","ﷷ":"علىo","ﲻ":"عم","ﰪ":"عم","ﵷ":"عمم","ﵶ":"عمم","ﵸ":"عمى","ﶶ":"عمى","ﴓ":"عى","ﳷ":"عى","ﴔ":"عى","ﳸ":"عى","𞸛":"غ","𞸻":"غ","𞹛":"غ","𞹻":"غ","𞺛":"غ","𞺻":"غ","ﻏ":"غ","ﻐ":"غ","ﻎ":"غ","ﻍ":"غ","ﲼ":"غج","ﰫ":"غج","ﲽ":"غم","ﰬ":"غم","ﵹ":"غمم","ﵻ":"غمى","ﵺ":"غمى","ﴕ":"غى","ﳹ":"غى","ﴖ":"غى","ﳺ":"غى","𞸐":"ف","𞸰":"ف","𞹰":"ف","𞺐":"ف","𞺰":"ف","ﻓ":"ف","ﻔ":"ف","ﻒ":"ف","ﻑ":"ف","ڧ":"ف","ﲾ":"فج","ﰭ":"فج","ﲿ":"فح","ﰮ":"فح","ﳀ":"فخ","ﰯ":"فخ","ﵽ":"فخم","ﵼ":"فخم","ﳁ":"فم","ﰰ":"فم","ﷁ":"فمى","ﱼ":"فى","ﰱ":"فى","ﱽ":"فى","ﰲ":"فى","𞸞":"ڡ","𞹾":"ڡ","ࢻ":"ڡ","ٯ":"ڡ","𞸟":"ڡ","𞹟":"ڡ","ࢼ":"ڡ","ڤ":"ڡۛ","ﭬ":"ڡۛ","ﭭ":"ڡۛ","ﭫ":"ڡۛ","ﭪ":"ڡۛ","ڨ":"ڡۛ","ࢤ":"ڢۛ","ﭰ":"ڦ","ﭱ":"ڦ","ﭯ":"ڦ","ﭮ":"ڦ","𞸒":"ق","𞸲":"ق","𞹒":"ق","𞹲":"ق","𞺒":"ق","𞺲":"ق","ﻗ":"ق","ﻘ":"ق","ﻖ":"ق","ﻕ":"ق","ﳂ":"قح","ﰳ":"قح","ﷱ":"قلى","ﳃ":"قم","ﰴ":"قم","ﶴ":"قمح","ﵾ":"قمح","ﵿ":"قمم","ﶲ":"قمى","ﱾ":"قى","ﰵ":"قى","ﱿ":"قى","ﰶ":"قى","𞸊":"ك","𞸪":"ك","𞹪":"ك","ﻛ":"ك","ﻜ":"ك","ﻚ":"ك","ﻙ":"ك","ک":"ك","ﮐ":"ك","ﮑ":"ك","ﮏ":"ك","ﮎ":"ك","ڪ":"ك","ڭ":"كۛ","ﯕ":"كۛ","ﯖ":"كۛ","ﯔ":"كۛ","ﯓ":"كۛ","ݣ":"كۛ","ﲀ":"كl","ﰷ":"كl","ﳄ":"كج","ﰸ":"كج","ﳅ":"كح","ﰹ":"كح","ﳆ":"كخ","ﰺ":"كخ","ﳇ":"كل","ﳫ":"كل","ﲁ":"كل","ﰻ":"كل","ﳈ":"كم","ﳬ":"كم","ﲂ":"كم","ﰼ":"كم","ﷃ":"كمم","ﶻ":"كمم","ﶷ":"كمى","ﲃ":"كى","ﰽ":"كى","ﲄ":"كى","ﰾ":"كى","ݢ":"ڬ","ﮔ":"گ","ﮕ":"گ","ﮓ":"گ","ﮒ":"گ","ࢰ":"گ","ڴ":"گۛ","ﮜ":"ڱ","ﮝ":"ڱ","ﮛ":"ڱ","ﮚ":"ڱ","ﮘ":"ڳ","ﮙ":"ڳ","ﮗ":"ڳ","ﮖ":"ڳ","𞸋":"ل","𞸫":"ل","𞹋":"ل","𞺋":"ل","𞺫":"ل","ﻟ":"ل","ﻠ":"ل","ﻞ":"ل","ﻝ":"ل","ڷ":"لۛ","ڵ":"ل̆","ﻼ":"لl","ﻻ":"لl","ﻺ":"لlٕ","ﻹ":"لlٕ","ﻸ":"لlٴ","ﻷ":"لlٴ","ﳍ":"لo","ﻶ":"لآ","ﻵ":"لآ","ﳉ":"لج","ﰿ":"لج","ﶃ":"لجج","ﶄ":"لجج","ﶺ":"لجم","ﶼ":"لجم","ﶬ":"لجى","ﳊ":"لح","ﱀ":"لح","ﶵ":"لحم","ﶀ":"لحم","ﶂ":"لحى","ﶁ":"لحى","ﳋ":"لخ","ﱁ":"لخ","ﶆ":"لخم","ﶅ":"لخم","ﳌ":"لم","ﳭ":"لم","ﲅ":"لم","ﱂ":"لم","ﶈ":"لمح","ﶇ":"لمح","ﶭ":"لمى","ﲆ":"لى","ﱃ":"لى","ﲇ":"لى","ﱄ":"لى","𞸌":"م","𞸬":"م","𞹬":"م","𞺌":"م","𞺬":"م","ﻣ":"م","ﻤ":"م","ﻢ":"م","ﻡ":"م","ࢧ":"مۛ","۾":"م͈","ﲈ":"مl","ﳎ":"مج","ﱅ":"مج","ﶌ":"مجح","ﶒ":"مجخ","ﶍ":"مجم","ﷀ":"مجى","ﳏ":"مح","ﱆ":"مح","ﶉ":"محج","ﶊ":"محم","ﷴ":"محمد","ﶋ":"محى","ﳐ":"مخ","ﱇ":"مخ","ﶎ":"مخج","ﶏ":"مخم","ﶹ":"مخى","ﳑ":"مم","ﲉ":"مم","ﱈ":"مم","ﶱ":"ممى","ﱉ":"مى","ﱊ":"مى","𞸍":"ن","𞸭":"ن","𞹍":"ن","𞹭":"ن","𞺍":"ن","𞺭":"ن","ﻧ":"ن","ﻨ":"ن","ﻦ":"ن","ﻥ":"ن","ݨ":"نؕ","ݩ":"ن̆","ﳖ":"نo","ﳯ":"نo","ﶸ":"نجح","ﶽ":"نجح","ﶘ":"نجم","ﶗ":"نجم","ﶙ":"نجى","ﷇ":"نجى","ﳓ":"نح","ﱌ":"نح","ﶕ":"نحم","ﶖ":"نحى","ﶳ":"نحى","ﳔ":"نخ","ﱍ":"نخ","ﲊ":"نر","ﲋ":"نز","ﳕ":"نم","ﳮ":"نم","ﲌ":"نم","ﱎ":"نم","ﶛ":"نمى","ﶚ":"نمى","ﲍ":"نن","ﲎ":"نى","ﱏ":"نى","ﲏ":"نى","ﱐ":"نى","ۂ":"ۀ","ﮥ":"ۀ","ﮤ":"ۀ","𐋤":"و","𞸅":"و","𞺅":"و","𞺥":"و","ﻮ":"و","ﻭ":"و","ࢱ":"و","ۋ":"وۛ","ﯟ":"وۛ","ﯞ":"وۛ","ۇ":"و̓","ﯘ":"و̓","ﯗ":"و̓","ۆ":"و̆","ﯚ":"و̆","ﯙ":"و̆","ۉ":"و̂","ﯣ":"و̂","ﯢ":"و̂","ۈ":"وٰ","ﯜ":"وٰ","ﯛ":"وٰ","ؤ":"وٴ","ﺆ":"وٴ","ﺅ":"وٴ","ٶ":"وٴ","ٷ":"و̓ٴ","ﯝ":"و̓ٴ","ﷸ":"وسلم","ﯡ":"ۅ","ﯠ":"ۅ","ٮ":"ى","𞸜":"ى","𞹼":"ى","ں":"ى","𞸝":"ى","𞹝":"ى","ﮟ":"ى","ﮞ":"ى","ࢽ":"ى","ﯨ":"ى","ﯩ":"ى","ﻰ":"ى","ﻯ":"ى","ي":"ى","𞸉":"ى","𞸩":"ى","𞹉":"ى","𞹩":"ى","𞺉":"ى","𞺩":"ى","ﻳ":"ى","ﻴ":"ى","ﻲ":"ى","ﻱ":"ى","ی":"ى","ﯾ":"ى","ﯿ":"ى","ﯽ":"ى","ﯼ":"ى","ے":"ى","ﮯ":"ى","ﮮ":"ى","ٹ":"ىؕ","ﭨ":"ىؕ","ﭩ":"ىؕ","ﭧ":"ىؕ","ﭦ":"ىؕ","ڻ":"ىؕ","ﮢ":"ىؕ","ﮣ":"ىؕ","ﮡ":"ىؕ","ﮠ":"ىؕ","پ":"ىۛ","ﭘ":"ىۛ","ﭙ":"ىۛ","ﭗ":"ىۛ","ﭖ":"ىۛ","ث":"ىۛ","𞸖":"ىۛ","𞸶":"ىۛ","𞹶":"ىۛ","𞺖":"ىۛ","𞺶":"ىۛ","ﺛ":"ىۛ","ﺜ":"ىۛ","ﺚ":"ىۛ","ﺙ":"ىۛ","ڽ":"ىۛ","ۑ":"ىۛ","ؿ":"ىۛ","ࢷ":"ىۛۢ","ݖ":"ى̆","ێ":"ى̆","ࢺ":"ى̆̇","ؽ":"ى̂","ࢨ":"ىٔ","ﲐ":"ىٰ","ﱝ":"ىٰ","ﳞ":"ىo","ﳱ":"ىo","ﳦ":"ىۛo","ئ":"ىٴ","ﺋ":"ىٴ","ﺌ":"ىٴ","ﺊ":"ىٴ","ﺉ":"ىٴ","ٸ":"ىٴ","ﯫ":"ىٴl","ﯪ":"ىٴl","ﲛ":"ىٴo","ﳠ":"ىٴo","ﯭ":"ىٴo","ﯬ":"ىٴo","ﯸ":"ىٴٻ","ﯷ":"ىٴٻ","ﯶ":"ىٴٻ","ﲗ":"ىٴج","ﰀ":"ىٴج","ﲘ":"ىٴح","ﰁ":"ىٴح","ﲙ":"ىٴخ","ﱤ":"ىٴر","ﱥ":"ىٴز","ﲚ":"ىٴم","ﳟ":"ىٴم","ﱦ":"ىٴم","ﰂ":"ىٴم","ﱧ":"ىٴن","ﯯ":"ىٴو","ﯮ":"ىٴو","ﯱ":"ىٴو̓","ﯰ":"ىٴو̓","ﯳ":"ىٴو̆","ﯲ":"ىٴو̆","ﯵ":"ىٴوٰ","ﯴ":"ىٴوٰ","ﯻ":"ىٴى","ﯺ":"ىٴى","ﱨ":"ىٴى","ﯹ":"ىٴى","ﰃ":"ىٴى","ﱩ":"ىٴى","ﰄ":"ىٴى","ﳚ":"ىج","ﱕ":"ىج","ﰑ":"ىۛج","ﶯ":"ىجى","ﳛ":"ىح","ﱖ":"ىح","ﶮ":"ىحى","ﳜ":"ىخ","ﱗ":"ىخ","ﲑ":"ىر","ﱶ":"ىۛر","ﲒ":"ىز","ﱷ":"ىۛز","ﳝ":"ىم","ﳰ":"ىم","ﲓ":"ىم","ﱘ":"ىم","ﲦ":"ىۛم","ﳥ":"ىۛم","ﱸ":"ىۛم","ﰒ":"ىۛم","ﶝ":"ىمم","ﶜ":"ىمم","ﶰ":"ىمى","ﲔ":"ىن","ﱹ":"ىۛن","ﲕ":"ىى","ﱙ":"ىى","ﲖ":"ىى","ﱚ":"ىى","ﱺ":"ىۛى","ﰓ":"ىۛى","ﱻ":"ىۛى","ﰔ":"ىۛى","ﮱ":"ۓ","ﮰ":"ۓ","𐊸":"ⵀ","⁞":"ⵂ","⸽":"ⵂ","⦙":"ⵂ","︙":"ⵗ","⁝":"ⵗ","⋮":"ⵗ","Մ":"ሆ","Ռ":"ቡ","Ի":"ኮ","Պ":"ጣ","आ":"अा","ऒ":"अाॆ","ओ":"अाे","औ":"अाै","ऄ":"अॆ","ऑ":"अॉ","ऍ":"एॅ","ऎ":"एॆ","ऐ":"एे","ई":"र्इ","ઽ":"ऽ","𑇜":"ꣻ","𑇋":"ऺ","ુ":"ु","ૂ":"ू","ੋ":"ॆ","੍":"्","્":"्","আ":"অা","ৠ":"ঋৃ","ৡ":"ঋৃ","𑒒":"ঘ","𑒔":"চ","𑒖":"জ","𑒘":"ঞ","𑒙":"ট","𑒛":"ড","𑒪":"ণ","𑒞":"ত","𑒟":"থ","𑒠":"দ","𑒡":"ধ","𑒢":"ন","𑒣":"প","𑒩":"ব","𑒧":"ম","𑒨":"য","𑒫":"র","𑒝":"ল","𑒭":"ষ","𑒮":"স","𑓄":"ঽ","𑒰":"া","𑒱":"ি","𑒹":"ে","𑒼":"ো","𑒾":"ৌ","𑓂":"্","𑒽":"ৗ","ਉ":"ੳੁ","ਊ":"ੳੂ","ਆ":"ਅਾ","ਐ":"ਅੈ","ਔ":"ਅੌ","ਇ":"ੲਿ","ਈ":"ੲੀ","ਏ":"ੲੇ","આ":"અા","ઑ":"અાૅ","ઓ":"અાે","ઔ":"અાૈ","ઍ":"અૅ","એ":"અે","ઐ":"અૈ","ଆ":"ଅା","௮":"அ","ர":"ஈ","ா":"ஈ","௫":"ஈு","௨":"உ","ഉ":"உ","ஊ":"உள","ഊ":"உൗ","௭":"எ","௷":"எவ","ஜ":"ஐ","ജ":"ஐ","௧":"க","௪":"ச","௬":"சு","௲":"சூ","ഺ":"டி","ണ":"ண","௺":"நீ","௴":"மீ","௰":"ய","ഴ":"ழ","ௗ":"ள","ை":"ன","ശ":"ஶ","௸":"ஷ","ി":"ி","ീ":"ி","ொ":"ெஈ","ௌ":"ெள","ோ":"ேஈ","ಅ":"అ","ಆ":"ఆ","ಇ":"ఇ","ౠ":"ఋా","ౡ":"ఌా","ಒ":"ఒ","ఔ":"ఒౌ","ಔ":"ఒౌ","ఓ":"ఒౕ","ಓ":"ఒౕ","ಜ":"జ","ಞ":"ఞ","ఢ":"డ̣","ಣ":"ణ","థ":"ధּ","భ":"బ̣","ಯ":"య","ఠ":"రּ","ಱ":"ఱ","ಲ":"ల","ష":"వ̣","హ":"వా","మ":"వు","ూ":"ుా","ౄ":"ృా","ೡ":"ಌಾ","ഈ":"ഇൗ","ഐ":"എെ","ഓ":"ഒാ","ഔ":"ഒൗ","ൡ":"ഞ","൫":"ദ്ര","൹":"നു","ഌ":"നു","ങ":"നു","൯":"ന്","ൻ":"ന്","൬":"ന്ന","൚":"ന്മ","റ":"ര","൪":"ര്","ർ":"ര്","൮":"വ്ര","൶":"ഹ്മ","ൂ":"ു","ൃ":"ു","ൈ":"െെ","෪":"ජ","෫":"ද","𑐓":"𑐴𑑂𑐒","𑐙":"𑐴𑑂𑐘","𑐤":"𑐴𑑂𑐣","𑐪":"𑐴𑑂𑐩","𑐭":"𑐴𑑂𑐬","𑐯":"𑐴𑑂𑐮","𑗘":"𑖂","𑗙":"𑖂","𑗚":"𑖃","𑗛":"𑖄","𑗜":"𑖲","𑗝":"𑖳","ฃ":"ข","ด":"ค","ต":"ค","ม":"ฆ","ຈ":"จ","ซ":"ช","ฏ":"ฎ","ท":"ฑ","ບ":"บ","ປ":"ป","ຝ":"ฝ","ພ":"พ","ຟ":"ฟ","ฦ":"ภ","ຍ":"ย","។":"ฯ","ๅ":"า","ำ":"̊า","ិ":"ิ","ី":"ี","ឹ":"ึ","ឺ":"ื","ຸ":"ุ","ູ":"ู","แ":"เเ","ໜ":"ຫນ","ໝ":"ຫມ","ຳ":"̊າ","༂":"འུྂཿ","༃":"འུྂ༔","ཪ":"ར","ༀ":"ཨོཾ","ཷ":"ྲཱྀ","ཹ":"ླཱྀ","𑲲":"𑲪","ႁ":"ဂှ","က":"ဂာ","ၰ":"ဃှ","ၦ":"ပှ","ဟ":"ပာ","ၯ":"ပာှ","ၾ":"ၽှ","ဩ":"သြ","ဪ":"သြော်","႞":"ႃ̊","ឣ":"អ","᧐":"ᦞ","᧑":"ᦱ","᪀":"ᩅ","᪐":"ᩅ","꩓":"ꨁ","꩖":"ꨣ","᭒":"ᬍ","᭓":"ᬑ","᭘":"ᬨ","ꦣ":"ꦝ","ᢖ":"ᡜ","ᡕ":"ᠵ","ῶ":"Ꮿ","ᐍ":"ᐁ·","ᐫ":"ᐁᐠ","ᐑ":"ᐄ·","ᐓ":"ᐅ·","ᐭ":"ᐅᐠ","ᐕ":"ᐆ·","ᐘ":"ᐊ·","ᐮ":"ᐊᐠ","ᐚ":"ᐋ·","ᣝ":"ᐞᣟ","ᓑ":"ᐡ","ᕀ":"ᐩ","ᐿ":"ᐲ·","ᑃ":"ᐴ·","⍩":"ᐵ","ᑇ":"ᐹ·","ᑜ":"ᑏ·","⸧":"ᑐ","⊃":"ᑐ","ᑞ":"ᑐ·","ᑩ":"ᑐ\'","⟉":"ᑐ/","⫗":"ᑐᑕ","ᑠ":"ᑑ·","⸦":"ᑕ","⊂":"ᑕ","ᑢ":"ᑕ·","ᑪ":"ᑕ\'","ᑤ":"ᑖ·","ᑵ":"ᑫ·","ᒅ":"ᑫ\'","ᑹ":"ᑮ·","ᑽ":"ᑰ·","ᘃ":"ᒉ","ᒓ":"ᒉ·","ᒕ":"ᒋ·","ᒗ":"ᒌ·","ᒛ":"ᒎ·","ᘂ":"ᒐ","ᒝ":"ᒐ·","ᒟ":"ᒑ·","ᒭ":"ᒣ·","ᒱ":"ᒦ·","ᒳ":"ᒧ·","ᒵ":"ᒨ·","ᒹ":"ᒫ·","ᓊ":"ᓀ·","ᣇ":"ᓂ·","ᣉ":"ᓃ·","ᣋ":"ᓄ·","ᣍ":"ᓅ·","ᓌ":"ᓇ·","ᓎ":"ᓈ·","ᘄ":"ᓓ","ᓝ":"ᓓ·","ᓟ":"ᓕ·","ᓡ":"ᓖ·","ᓣ":"ᓗ·","ᓥ":"ᓘ·","ᘇ":"ᓚ","ᓧ":"ᓚ·","ᓩ":"ᓛ·","ᓷ":"ᓭ·","ᓹ":"ᓯ·","ᓻ":"ᓰ·","ᓽ":"ᓱ·","ᓿ":"ᓲ·","ᔁ":"ᓴ·","ᔃ":"ᓵ·","ᔌ":"ᔋ<","ᔎ":"ᔋb","ᔍ":"ᔋᑕ","ᔏ":"ᔋᒐ","ᔘ":"ᔐ·","ᔚ":"ᔑ·","ᔜ":"ᔒ·","ᔞ":"ᔓ·","ᔠ":"ᔔ·","ᔢ":"ᔕ·","ᔤ":"ᔖ·","ᔲ":"ᔨ·","ᔴ":"ᔩ·","ᔶ":"ᔪ·","ᔸ":"ᔫ·","ᔺ":"ᔭ·","ᔼ":"ᔮ·","ᘢ":"ᕃ","ᣠ":"ᕃ·","ᘣ":"ᕆ","ᘤ":"ᕊ","ᕏ":"ᕌ·","ᖃ":"ᕐb","ᖄ":"ᕐḃ","ᖁ":"ᕐd","ᕿ":"ᕐP","ᙯ":"ᕐᑫ","ᕾ":"ᕐᑬ","ᖀ":"ᕐᑮ","ᖂ":"ᕐᑰ","ᖅ":"ᕐᒃ","ᕜ":"ᕚ·","ᣣ":"ᕞ·","ᣤ":"ᕦ·","ᕩ":"ᕧ·","ᣥ":"ᕫ·","ᣨ":"ᖆ·","ᖑ":"ᖕJ","ᙰ":"ᖕᒉ","ᖎ":"ᖕᒊ","ᖏ":"ᖕᒋ","ᖐ":"ᖕᒌ","ᖒ":"ᖕᒎ","ᖓ":"ᖕᒐ","ᖔ":"ᖕᒑ","ᙳ":"ᖖJ","ᙱ":"ᖖᒋ","ᙲ":"ᖖᒌ","ᙴ":"ᖖᒎ","ᙵ":"ᖖᒐ","ᙶ":"ᖖᒑ","ᣪ":"ᖗ·","ᙷ":"ᖧ·","ᙸ":"ᖨ·","ᙹ":"ᖩ·","ᙺ":"ᖪ·","ᙻ":"ᖫ·","ᙼ":"ᖬ·","ᙽ":"ᖭ·","⪫":"ᗒ","⪪":"ᗕ","ꓷ":"ᗡ","ᣰ":"ᗴ·","ᣲ":"ᘛ·","ᶻ":"ᙆ","ꓭ":"ᙠ","ᶺ":"ᣔ","ᴾ":"ᣖ","ᣜ":"ᣟᐞ","ˡ":"ᣳ","ʳ":"ᣴ","ˢ":"ᣵ","ᣛ":"ᣵ","ꚰ":"ᚹ","ᛡ":"ᚼ","⍿":"ᚽ","ᛂ":"ᚽ","𝈿":"ᛋ","↑":"ᛏ","↿":"ᛐ","⥮":"ᛐ⇂","⥣":"ᛐᛚ","ⵣ":"ᛯ","↾":"ᛚ","⨡":"ᛚ","⋄":"ᛜ","◇":"ᛜ","◊":"ᛜ","♢":"ᛜ","🝔":"ᛜ","𑢷":"ᛜ","𐊔":"ᛜ","⍚":"ᛜ̲","⋈":"ᛞ","⨝":"ᛞ","𐓐":"ᛦ","↕":"ᛨ","𐳼":"𐲂","𐳺":"𐲥","ㄱ":"ᄀ","ᆨ":"ᄀ","ᄁ":"ᄀᄀ","ㄲ":"ᄀᄀ","ᆩ":"ᄀᄀ","ᇺ":"ᄀᄂ","ᅚ":"ᄀᄃ","ᇃ":"ᄀᄅ","ᇻ":"ᄀᄇ","ᆪ":"ᄀᄉ","ㄳ":"ᄀᄉ","ᇄ":"ᄀᄉᄀ","ᇼ":"ᄀᄎ","ᇽ":"ᄀᄏ","ᇾ":"ᄀᄒ","ㄴ":"ᄂ","ᆫ":"ᄂ","ᄓ":"ᄂᄀ","ᇅ":"ᄂᄀ","ᄔ":"ᄂᄂ","ㅥ":"ᄂᄂ","ᇿ":"ᄂᄂ","ᄕ":"ᄂᄃ","ㅦ":"ᄂᄃ","ᇆ":"ᄂᄃ","ퟋ":"ᄂᄅ","ᄖ":"ᄂᄇ","ᅛ":"ᄂᄉ","ᇇ":"ᄂᄉ","ㅧ":"ᄂᄉ","ᅜ":"ᄂᄌ","ᆬ":"ᄂᄌ","ㄵ":"ᄂᄌ","ퟌ":"ᄂᄎ","ᇉ":"ᄂᄐ","ᅝ":"ᄂᄒ","ᆭ":"ᄂᄒ","ㄶ":"ᄂᄒ","ᇈ":"ᄂᅀ","ㅨ":"ᄂᅀ","ㄷ":"ᄃ","ᆮ":"ᄃ","ᄗ":"ᄃᄀ","ᇊ":"ᄃᄀ","ᄄ":"ᄃᄃ","ㄸ":"ᄃᄃ","ퟍ":"ᄃᄃ","ퟎ":"ᄃᄃᄇ","ᅞ":"ᄃᄅ","ᇋ":"ᄃᄅ","ꥠ":"ᄃᄆ","ꥡ":"ᄃᄇ","ퟏ":"ᄃᄇ","ꥢ":"ᄃᄉ","ퟐ":"ᄃᄉ","ퟑ":"ᄃᄉᄀ","ꥣ":"ᄃᄌ","ퟒ":"ᄃᄌ","ퟓ":"ᄃᄎ","ퟔ":"ᄃᄐ","ㄹ":"ᄅ","ᆯ":"ᄅ","ꥤ":"ᄅᄀ","ᆰ":"ᄅᄀ","ㄺ":"ᄅᄀ","ꥥ":"ᄅᄀᄀ","ퟕ":"ᄅᄀᄀ","ᇌ":"ᄅᄀᄉ","ㅩ":"ᄅᄀᄉ","ퟖ":"ᄅᄀᄒ","ᄘ":"ᄅᄂ","ᇍ":"ᄅᄂ","ꥦ":"ᄅᄃ","ᇎ":"ᄅᄃ","ㅪ":"ᄅᄃ","ꥧ":"ᄅᄃᄃ","ᇏ":"ᄅᄃᄒ","ᄙ":"ᄅᄅ","ᇐ":"ᄅᄅ","ퟗ":"ᄅᄅᄏ","ꥨ":"ᄅᄆ","ᆱ":"ᄅᄆ","ㄻ":"ᄅᄆ","ᇑ":"ᄅᄆᄀ","ᇒ":"ᄅᄆᄉ","ퟘ":"ᄅᄆᄒ","ꥩ":"ᄅᄇ","ᆲ":"ᄅᄇ","ㄼ":"ᄅᄇ","ퟙ":"ᄅᄇᄃ","ꥪ":"ᄅᄇᄇ","ᇓ":"ᄅᄇᄉ","ㅫ":"ᄅᄇᄉ","ꥫ":"ᄅᄇᄋ","ᇕ":"ᄅᄇᄋ","ퟚ":"ᄅᄇᄑ","ᇔ":"ᄅᄇᄒ","ꥬ":"ᄅᄉ","ᆳ":"ᄅᄉ","ㄽ":"ᄅᄉ","ᇖ":"ᄅᄉᄉ","ᄛ":"ᄅᄋ","ퟝ":"ᄅᄋ","ꥭ":"ᄅᄌ","ꥮ":"ᄅᄏ","ᇘ":"ᄅᄏ","ᆴ":"ᄅᄐ","ㄾ":"ᄅᄐ","ᆵ":"ᄅᄑ","ㄿ":"ᄅᄑ","ᄚ":"ᄅᄒ","ㅀ":"ᄅᄒ","ᄻ":"ᄅᄒ","ᆶ":"ᄅᄒ","ퟲ":"ᄅᄒ","ᇗ":"ᄅᅀ","ㅬ":"ᄅᅀ","ퟛ":"ᄅᅌ","ᇙ":"ᄅᅙ","ㅭ":"ᄅᅙ","ퟜ":"ᄅᅙᄒ","ㅁ":"ᄆ","ᆷ":"ᄆ","ꥯ":"ᄆᄀ","ᇚ":"ᄆᄀ","ퟞ":"ᄆᄂ","ퟟ":"ᄆᄂᄂ","ꥰ":"ᄆᄃ","ᇛ":"ᄆᄅ","ퟠ":"ᄆᄆ","ᄜ":"ᄆᄇ","ㅮ":"ᄆᄇ","ᇜ":"ᄆᄇ","ퟡ":"ᄆᄇᄉ","ꥱ":"ᄆᄉ","ᇝ":"ᄆᄉ","ㅯ":"ᄆᄉ","ᇞ":"ᄆᄉᄉ","ᄝ":"ᄆᄋ","ㅱ":"ᄆᄋ","ᇢ":"ᄆᄋ","ퟢ":"ᄆᄌ","ᇠ":"ᄆᄎ","ᇡ":"ᄆᄒ","ᇟ":"ᄆᅀ","ㅰ":"ᄆᅀ","ㅂ":"ᄇ","ᆸ":"ᄇ","ᄞ":"ᄇᄀ","ㅲ":"ᄇᄀ","ᄟ":"ᄇᄂ","ᄠ":"ᄇᄃ","ㅳ":"ᄇᄃ","ퟣ":"ᄇᄃ","ᇣ":"ᄇᄅ","ퟤ":"ᄇᄅᄑ","ퟥ":"ᄇᄆ","ᄈ":"ᄇᄇ","ㅃ":"ᄇᄇ","ퟦ":"ᄇᄇ","ᄬ":"ᄇᄇᄋ","ㅹ":"ᄇᄇᄋ","ᄡ":"ᄇᄉ","ㅄ":"ᄇᄉ","ᆹ":"ᄇᄉ","ᄢ":"ᄇᄉᄀ","ㅴ":"ᄇᄉᄀ","ᄣ":"ᄇᄉᄃ","ㅵ":"ᄇᄉᄃ","ퟧ":"ᄇᄉᄃ","ᄤ":"ᄇᄉᄇ","ᄥ":"ᄇᄉᄉ","ᄦ":"ᄇᄉᄌ","ꥲ":"ᄇᄉᄐ","ᄫ":"ᄇᄋ","ㅸ":"ᄇᄋ","ᇦ":"ᄇᄋ","ᄧ":"ᄇᄌ","ㅶ":"ᄇᄌ","ퟨ":"ᄇᄌ","ᄨ":"ᄇᄎ","ퟩ":"ᄇᄎ","ꥳ":"ᄇᄏ","ᄩ":"ᄇᄐ","ㅷ":"ᄇᄐ","ᄪ":"ᄇᄑ","ᇤ":"ᄇᄑ","ꥴ":"ᄇᄒ","ᇥ":"ᄇᄒ","ㅅ":"ᄉ","ᆺ":"ᄉ","ᄭ":"ᄉᄀ","ㅺ":"ᄉᄀ","ᇧ":"ᄉᄀ","ᄮ":"ᄉᄂ","ㅻ":"ᄉᄂ","ᄯ":"ᄉᄃ","ㅼ":"ᄉᄃ","ᇨ":"ᄉᄃ","ᄰ":"ᄉᄅ","ᇩ":"ᄉᄅ","ᄱ":"ᄉᄆ","ퟪ":"ᄉᄆ","ᄲ":"ᄉᄇ","ㅽ":"ᄉᄇ","ᇪ":"ᄉᄇ","ᄳ":"ᄉᄇᄀ","ퟫ":"ᄉᄇᄋ","ᄊ":"ᄉᄉ","ㅆ":"ᄉᄉ","ᆻ":"ᄉᄉ","ퟬ":"ᄉᄉᄀ","ퟭ":"ᄉᄉᄃ","ꥵ":"ᄉᄉᄇ","ᄴ":"ᄉᄉᄉ","ᄵ":"ᄉᄋ","ᄶ":"ᄉᄌ","ㅾ":"ᄉᄌ","ퟯ":"ᄉᄌ","ᄷ":"ᄉᄎ","ퟰ":"ᄉᄎ","ᄸ":"ᄉᄏ","ᄹ":"ᄉᄐ","ퟱ":"ᄉᄐ","ᄺ":"ᄉᄑ","ퟮ":"ᄉᅀ","ㅇ":"ᄋ","ᆼ":"ᄋ","ᅁ":"ᄋᄀ","ᇬ":"ᄋᄀ","ᇭ":"ᄋᄀᄀ","ᅂ":"ᄋᄃ","ꥶ":"ᄋᄅ","ᅃ":"ᄋᄆ","ᅄ":"ᄋᄇ","ᅅ":"ᄋᄉ","ᇱ":"ᄋᄉ","ㆂ":"ᄋᄉ","ᅇ":"ᄋᄋ","ㆀ":"ᄋᄋ","ᇮ":"ᄋᄋ","ᅈ":"ᄋᄌ","ᅉ":"ᄋᄎ","ᇯ":"ᄋᄏ","ᅊ":"ᄋᄐ","ᅋ":"ᄋᄑ","ꥷ":"ᄋᄒ","ᅆ":"ᄋᅀ","ᇲ":"ᄋᅀ","ㆃ":"ᄋᅀ","ㅈ":"ᄌ","ᆽ":"ᄌ","ퟷ":"ᄌᄇ","ퟸ":"ᄌᄇᄇ","ᅍ":"ᄌᄋ","ᄍ":"ᄌᄌ","ㅉ":"ᄌᄌ","ퟹ":"ᄌᄌ","ꥸ":"ᄌᄌᄒ","ㅊ":"ᄎ","ᆾ":"ᄎ","ᅒ":"ᄎᄏ","ᅓ":"ᄎᄒ","ㅋ":"ᄏ","ᆿ":"ᄏ","ㅌ":"ᄐ","ᇀ":"ᄐ","ꥹ":"ᄐᄐ","ㅍ":"ᄑ","ᇁ":"ᄑ","ᅖ":"ᄑᄇ","ᇳ":"ᄑᄇ","ퟺ":"ᄑᄉ","ᅗ":"ᄑᄋ","ㆄ":"ᄑᄋ","ᇴ":"ᄑᄋ","ퟻ":"ᄑᄐ","ꥺ":"ᄑᄒ","ㅎ":"ᄒ","ᇂ":"ᄒ","ᇵ":"ᄒᄂ","ᇶ":"ᄒᄅ","ᇷ":"ᄒᄆ","ᇸ":"ᄒᄇ","ꥻ":"ᄒᄉ","ᅘ":"ᄒᄒ","ㆅ":"ᄒᄒ","ᄽ":"ᄼᄼ","ᄿ":"ᄾᄾ","ㅿ":"ᅀ","ᇫ":"ᅀ","ퟳ":"ᅀᄇ","ퟴ":"ᅀᄇᄋ","ㆁ":"ᅌ","ᇰ":"ᅌ","ퟵ":"ᅌᄆ","ퟶ":"ᅌᄒ","ᅏ":"ᅎᅎ","ᅑ":"ᅐᅐ","ㆆ":"ᅙ","ᇹ":"ᅙ","ꥼ":"ᅙᅙ","ㅤ":"ᅠ","ㅏ":"ᅡ","ᆣ":"ᅡー","ᅶ":"ᅡᅩ","ᅷ":"ᅡᅮ","ᅢ":"ᅡ丨","ㅐ":"ᅡ丨","ㅑ":"ᅣ","ᅸ":"ᅣᅩ","ᅹ":"ᅣᅭ","ᆤ":"ᅣᅮ","ᅤ":"ᅣ丨","ㅒ":"ᅣ丨","ㅓ":"ᅥ","ᅼ":"ᅥー","ᅺ":"ᅥᅩ","ᅻ":"ᅥᅮ","ᅦ":"ᅥ丨","ㅔ":"ᅥ丨","ㅕ":"ᅧ","ᆥ":"ᅧᅣ","ᅽ":"ᅧᅩ","ᅾ":"ᅧᅮ","ᅨ":"ᅧ丨","ㅖ":"ᅧ丨","ㅗ":"ᅩ","ᅪ":"ᅩᅡ","ㅘ":"ᅩᅡ","ᅫ":"ᅩᅡ丨","ㅙ":"ᅩᅡ丨","ᆦ":"ᅩᅣ","ᆧ":"ᅩᅣ丨","ᅿ":"ᅩᅥ","ᆀ":"ᅩᅥ丨","ힰ":"ᅩᅧ","ᆁ":"ᅩᅧ丨","ᆂ":"ᅩᅩ","ힱ":"ᅩᅩ丨","ᆃ":"ᅩᅮ","ᅬ":"ᅩ丨","ㅚ":"ᅩ丨","ㅛ":"ᅭ","ힲ":"ᅭᅡ","ힳ":"ᅭᅡ丨","ᆄ":"ᅭᅣ","ㆇ":"ᅭᅣ","ᆆ":"ᅭᅣ","ᆅ":"ᅭᅣ丨","ㆈ":"ᅭᅣ丨","ힴ":"ᅭᅥ","ᆇ":"ᅭᅩ","ᆈ":"ᅭ丨","ㆉ":"ᅭ丨","ㅜ":"ᅮ","ᆉ":"ᅮᅡ","ᆊ":"ᅮᅡ丨","ᅯ":"ᅮᅥ","ㅝ":"ᅮᅥ","ᆋ":"ᅮᅥー","ᅰ":"ᅮᅥ丨","ㅞ":"ᅮᅥ丨","ힵ":"ᅮᅧ","ᆌ":"ᅮᅧ丨","ᆍ":"ᅮᅮ","ᅱ":"ᅮ丨","ㅟ":"ᅮ丨","ힶ":"ᅮ丨丨","ㅠ":"ᅲ","ᆎ":"ᅲᅡ","ힷ":"ᅲᅡ丨","ᆏ":"ᅲᅥ","ᆐ":"ᅲᅥ丨","ᆑ":"ᅲᅧ","ㆊ":"ᅲᅧ","ᆒ":"ᅲᅧ丨","ㆋ":"ᅲᅧ丨","ힸ":"ᅲᅩ","ᆓ":"ᅲᅮ","ᆔ":"ᅲ丨","ㆌ":"ᅲ丨","ㆍ":"ᆞ","ퟅ":"ᆞᅡ","ᆟ":"ᆞᅥ","ퟆ":"ᆞᅥ丨","ᆠ":"ᆞᅮ","ᆢ":"ᆞᆞ","ᆡ":"ᆞ丨","ㆎ":"ᆞ丨","ヘ":"へ","⍁":"〼","⧄":"〼","꒞":"ꁊ","꒬":"ꁐ","꒜":"ꃀ","꒨":"ꄲ","꒿":"ꉙ","꒾":"ꊱ","꒔":"ꋍ","꓀":"ꎫ","꓂":"ꎵ","꒺":"ꎿ","꒰":"ꏂ","꒧":"ꑘ","⊥":"ꓕ","⟂":"ꓕ","𝈜":"ꓕ","Ʇ":"ꓕ","Ꞟ":"ꓤ","⅁":"ꓨ","⅂":"ꓶ","𝈕":"ꓶ","𝈫":"ꓶ","𖼦":"ꓶ","𐐑":"ꓶ","⅃":"𖼀","𑫦":"𑫥𑫯","𑫨":"𑫥𑫥","𑫩":"𑫥𑫥𑫯","𑫪":"𑫥𑫥𑫰","𑫧":"𑫥𑫰","𑫴":"𑫳𑫯","𑫶":"𑫳𑫳","𑫷":"𑫳𑫳𑫯","𑫸":"𑫳𑫳𑫰","𑫵":"𑫳𑫰","𑫬":"𑫫𑫯","𑫭":"𑫫𑫫","𑫮":"𑫫𑫫𑫯","⊕":"𐊨","⨁":"𐊨","🜨":"𐊨","Ꚛ":"𐊨","▽":"𐊼","𝈔":"𐊼","🜄":"𐊼","⧖":"𐋀","ꞛ":"𐐺","Ꞛ":"𐐒","𐒠":"𐒆","𐏑":"𐎂","𐏓":"𐎓","𒀸":"𐎚","☥":"𐦞","𓋹":"𐦞","〹":"卄","不":"不","丽":"丽","並":"並","⎜":"丨","⎟":"丨","⎢":"丨","⎥":"丨","⎪":"丨","⎮":"丨","㇑":"丨","ᅵ":"丨","ㅣ":"丨","⼁":"丨","ᆜ":"丨ー","ᆘ":"丨ᅡ","ᆙ":"丨ᅣ","ힽ":"丨ᅣᅩ","ힾ":"丨ᅣ丨","ힿ":"丨ᅧ","ퟀ":"丨ᅧ丨","ᆚ":"丨ᅩ","ퟁ":"丨ᅩ丨","ퟂ":"丨ᅭ","ᆛ":"丨ᅮ","ퟃ":"丨ᅲ","ᆝ":"丨ᆞ","ퟄ":"丨丨","串":"串","丸":"丸","丹":"丹","乁":"乁","㇠":"乙","⼄":"乙","㇟":"乚","⺃":"乚","㇖":"乛","⺂":"乛","⻲":"亀","亂":"亂","㇚":"亅","⼅":"亅","了":"了","ニ":"二","⼆":"二","𠄢":"𠄢","⼇":"亠","亮":"亮","⼈":"人","イ":"亻","⺅":"亻","什":"什","仌":"仌","令":"令","你":"你","倂":"併","倂":"併","侀":"侀","來":"來","例":"例","侮":"侮","侮":"侮","侻":"侻","便":"便","值":"値","倫":"倫","偺":"偺","備":"備","像":"像","僚":"僚","僧":"僧","僧":"僧","㒞":"㒞","⼉":"儿","兀":"兀","⺎":"兀","充":"充","免":"免","免":"免","兔":"兔","兤":"兤","⼊":"入","內":"內","全":"全","兩":"兩","ハ":"八","⼋":"八","六":"六","具":"具","𠔜":"𠔜","𠔥":"𠔥","冀":"冀","㒹":"㒹","⼌":"冂","再":"再","𠕋":"𠕋","冒":"冒","冕":"冕","㒻":"㒻","最":"最","⼍":"冖","冗":"冗","冤":"冤","⼎":"冫","冬":"冬","况":"况","况":"况","冷":"冷","凉":"凉","凌":"凌","凜":"凜","凞":"凞","⼏":"几","𠘺":"𠘺","凵":"凵","⼐":"凵","⼑":"刀","⺉":"刂","刃":"刃","切":"切","切":"切","列":"列","利":"利","㓟":"㓟","刺":"刺","刻":"刻","剆":"剆","割":"割","剷":"剷","劉":"劉","𠠄":"𠠄","カ":"力","力":"力","⼒":"力","劣":"劣","㔕":"㔕","劳":"劳","勇":"勇","勇":"勇","勉":"勉","勉":"勉","勒":"勒","勞":"勞","勤":"勤","勤":"勤","勵":"勵","⼓":"勹","勺":"勺","勺":"勺","包":"包","匆":"匆","𠣞":"𠣞","⼔":"匕","北":"北","北":"北","⼕":"匚","⼖":"匸","匿":"匿","⼗":"十","〸":"十","〺":"卅","卉":"卉","࿖":"卍","࿕":"卐","卑":"卑","卑":"卑","博":"博","ト":"卜","⼘":"卜","⼙":"卩","⺋":"㔾","即":"即","卵":"卵","卽":"卽","卿":"卿","卿":"卿","卿":"卿","⼚":"厂","𠨬":"𠨬","⼛":"厶","參":"參","⼜":"又","及":"及","叟":"叟","𠭣":"𠭣","ロ":"口","⼝":"口","囗":"口","⼞":"口","句":"句","叫":"叫","叱":"叱","吆":"吆","吏":"吏","吝":"吝","吸":"吸","呂":"呂","呈":"呈","周":"周","咞":"咞","咢":"咢","咽":"咽","䎛":"㖈","哶":"哶","唐":"唐","啓":"啓","啟":"啓","啕":"啕","啣":"啣","善":"善","善":"善","喇":"喇","喙":"喙","喙":"喙","喝":"喝","喝":"喝","喫":"喫","喳":"喳","嗀":"嗀","嗂":"嗂","嗢":"嗢","嘆":"嘆","嘆":"嘆","噑":"噑","噴":"噴","器":"器","囹":"囹","圖":"圖","圗":"圗","⼟":"土","士":"土","⼠":"土","型":"型","城":"城","㦳":"㘽","埴":"埴","堍":"堍","報":"報","堲":"堲","塀":"塀","塚":"塚","塚":"塚","塞":"塞","填":"塡","壿":"墫","墬":"墬","墳":"墳","壘":"壘","壟":"壟","𡓤":"𡓤","壮":"壮","売":"売","壷":"壷","⼡":"夂","夆":"夆","⼢":"夊","タ":"夕","⼣":"夕","多":"多","夢":"夢","⼤":"大","奄":"奄","奈":"奈","契":"契","奔":"奔","奢":"奢","女":"女","⼥":"女","𡚨":"𡚨","𡛪":"𡛪","姘":"姘","姬":"姬","娛":"娛","娧":"娧","婢":"婢","婦":"婦","嬀":"媯","㛮":"㛮","㛼":"㛼","媵":"媵","嬈":"嬈","嬨":"嬨","嬾":"嬾","嬾":"嬾","⼦":"子","⼧":"宀","宅":"宅","𡧈":"𡧈","寃":"寃","寘":"寘","寧":"寧","寧":"寧","寧":"寧","寮":"寮","寳":"寳","𡬘":"𡬘","⼨":"寸","寿":"寿","将":"将","⼩":"小","尢":"尢","⺐":"尢","⼪":"尢","⺏":"尣","㞁":"㞁","⼫":"尸","尿":"尿","屠":"屠","屢":"屢","層":"層","履":"履","屮":"屮","屮":"屮","⼬":"屮","𡴋":"𡴋","⼭":"山","峀":"峀","岍":"岍","𡷤":"𡷤","𡷦":"𡷦","崙":"崙","嵃":"嵃","嵐":"嵐","嵫":"嵫","嵮":"嵮","嵼":"嵼","嶲":"嶲","嶺":"嶺","⼮":"巛","巢":"巢","エ":"工","⼯":"工","⼰":"己","⺒":"巳","㠯":"㠯","巽":"巽","⼱":"巾","帲":"帡","帨":"帨","帽":"帽","幩":"幩","㡢":"㡢","𢆃":"𢆃","⼲":"干","年":"年","𢆟":"𢆟","⺓":"幺","⼳":"幺","⼴":"广","度":"度","㡼":"㡼","庰":"庰","庳":"庳","庶":"庶","廊":"廊","廊":"廊","廉":"廉","廒":"廒","廓":"廓","廙":"廙","廬":"廬","⼵":"廴","廾":"廾","⼶":"廾","𢌱":"𢌱","𢌱":"𢌱","弄":"弄","⼷":"弋","⼸":"弓","弢":"弢","弢":"弢","⼹":"彐","⺔":"彑","当":"当","㣇":"㣇","⼺":"彡","形":"形","彩":"彩","彫":"彫","⼻":"彳","律":"律","㣣":"㣣","徚":"徚","復":"復","徭":"徭","⼼":"心","⺖":"忄","⺗":"㣺","忍":"忍","志":"志","念":"念","忹":"忹","怒":"怒","怜":"怜","恵":"恵","㤜":"㤜","㤺":"㤺","悁":"悁","悔":"悔","悔":"悔","惇":"惇","惘":"惘","惡":"惡","𢛔":"𢛔","愈":"愈","慨":"慨","慄":"慄","慈":"慈","慌":"慌","慌":"慌","慎":"慎","慎":"慎","慠":"慠","慺":"慺","憎":"憎","憎":"憎","憎":"憎","憐":"憐","憤":"憤","憯":"憯","憲":"憲","𢡄":"𢡄","𢡊":"𢡊","懞":"懞","懲":"懲","懲":"懲","懲":"懲","懶":"懶","懶":"懶","戀":"戀","⼽":"戈","成":"成","戛":"戛","戮":"戮","戴":"戴","⼾":"戶","戸":"戶","⼿":"手","⺘":"扌","扝":"扝","抱":"抱","拉":"拉","拏":"拏","拓":"拓","拔":"拔","拼":"拼","拾":"拾","𢬌":"𢬌","挽":"挽","捐":"捐","捨":"捨","捻":"捻","掃":"掃","掠":"掠","掩":"掩","揄":"揄","揤":"揤","摒":"摒","𢯱":"𢯱","搜":"搜","搢":"搢","揅":"揅","摩":"摩","摷":"摷","摾":"摾","㨮":"㨮","搉":"㩁","撚":"撚","撝":"撝","擄":"擄","㩬":"㩬","⽀":"支","⽁":"攴","⺙":"攵","敏":"敏","敏":"敏","敖":"敖","敬":"敬","數":"數","𣀊":"𣀊","⽂":"文","⻫":"斉","⽃":"斗","料":"料","⽄":"斤","⽅":"方","旅":"旅","⽆":"无","⺛":"旡","既":"既","旣":"旣","⽇":"日","易":"易","曶":"㫚","㫤":"㫤","晉":"晉","晩":"晚","晴":"晴","晴":"晴","暑":"暑","暑":"暑","暈":"暈","㬈":"㬈","暜":"暜","暴":"暴","曆":"曆","㬙":"㬙","𣊸":"𣊸","⽈":"曰","更":"更","書":"書","⽉":"月","𣍟":"𣍟","肦":"朌","胐":"朏","胊":"朐","脁":"朓","胶":"㬵","朗":"朗","朗":"朗","朗":"朗","脧":"朘","望":"望","望":"望","幐":"㬺","䐠":"㬻","𣎓":"𣎓","膧":"朣","𣎜":"𣎜","⽊":"木","李":"李","杓":"杓","杖":"杖","杞":"杞","𣏃":"𣏃","柿":"杮","杻":"杻","枅":"枅","林":"林","㭉":"㭉","𣏕":"𣏕","柳":"柳","柺":"柺","栗":"栗","栟":"栟","桒":"桒","𣑭":"𣑭","梁":"梁","梅":"梅","梅":"梅","梎":"梎","梨":"梨","椔":"椔","楂":"楂","㮝":"㮝","㮝":"㮝","槩":"㮣","樧":"榝","榣":"榣","槪":"槪","樂":"樂","樂":"樂","樂":"樂","樓":"樓","𣚣":"𣚣","檨":"檨","櫓":"櫓","櫛":"櫛","欄":"欄","㰘":"㰘","⽋":"欠","次":"次","𣢧":"𣢧","歔":"歔","㱎":"㱎","⽌":"止","⻭":"歯","歲":"歲","歷":"歷","歹":"歹","⽍":"歹","⺞":"歺","殟":"殟","殮":"殮","⽎":"殳","殺":"殺","殺":"殺","殺":"殺","殻":"殻","𣪍":"𣪍","⽏":"毋","⺟":"母","𣫺":"𣫺","⽐":"比","⽑":"毛","⽒":"氏","⺠":"民","⽓":"气","⽔":"水","⺡":"氵","⺢":"氺","汎":"汎","汧":"汧","沈":"沈","沿":"沿","泌":"泌","泍":"泍","泥":"泥","𣲼":"𣲼","洛":"洛","洞":"洞","洴":"洴","派":"派","流":"流","流":"流","流":"流","洖":"洖","浩":"浩","浪":"浪","海":"海","海":"海","浸":"浸","涅":"涅","𣴞":"𣴞","淋":"淋","淚":"淚","淪":"淪","淹":"淹","渚":"渚","港":"港","湮":"湮","潙":"溈","滋":"滋","滋":"滋","溜":"溜","溺":"溺","滇":"滇","滑":"滑","滛":"滛","㴳":"㴳","漏":"漏","漢":"漢","漢":"漢","漣":"漣","𣻑":"𣻑","潮":"潮","𣽞":"𣽞","𣾎":"𣾎","濆":"濆","濫":"濫","濾":"濾","瀛":"瀛","瀞":"瀞","瀞":"瀞","瀹":"瀹","灊":"灊","㶖":"㶖","⽕":"火","⺣":"灬","灰":"灰","灷":"灷","災":"災","炙":"炙","炭":"炭","烈":"烈","烙":"烙","煮":"煮","煮":"煮","𤉣":"𤉣","煅":"煅","煉":"煉","𤋮":"𤋮","熜":"熜","燎":"燎","燐":"燐","𤎫":"𤎫","爐":"爐","爛":"爛","爨":"爨","⽖":"爪","爫":"爫","⺤":"爫","爵":"爵","爵":"爵","⽗":"父","⽘":"爻","⺦":"丬","⽙":"爿","⽚":"片","牐":"牐","⽛":"牙","𤘈":"𤘈","⽜":"牛","牢":"牢","犀":"犀","犕":"犕","⽝":"犬","⺨":"犭","犯":"犯","狀":"狀","𤜵":"𤜵","狼":"狼","猪":"猪","猪":"猪","𤠔":"𤠔","獵":"獵","獺":"獺","⽞":"玄","率":"率","率":"率","⽟":"玉","王":"王","㺬":"㺬","玥":"玥","玲":"玲","㺸":"㺸","㺸":"㺸","珞":"珞","琉":"琉","理":"理","琢":"琢","瑇":"瑇","瑜":"瑜","瑩":"瑩","瑱":"瑱","瑱":"瑱","璅":"璅","璉":"璉","璘":"璘","瓊":"瓊","⽠":"瓜","⽡":"瓦","㼛":"㼛","甆":"甆","⽢":"甘","⽣":"生","甤":"甤","⽤":"用","⽥":"田","画":"画","甾":"甾","𤰶":"𤰶","留":"留","略":"略","異":"異","異":"異","𤲒":"𤲒","⽦":"疋","⽧":"疒","痢":"痢","瘐":"瘐","瘟":"瘟","瘝":"瘝","療":"療","癩":"癩","⽨":"癶","⽩":"白","𤾡":"𤾡","𤾸":"𤾸","⽪":"皮","⽫":"皿","𥁄":"𥁄","㿼":"㿼","益":"益","益":"益","盛":"盛","盧":"盧","䀈":"䀈","⽬":"目","直":"直","直":"直","𥃲":"𥃲","𥃳":"𥃳","省":"省","䀘":"䀘","𥄙":"𥄙","眞":"眞","真":"真","真":"真","𥄳":"𥄳","着":"着","睊":"睊","睊":"睊","鿃":"䀹","䀹":"䀹","䀹":"䀹","晣":"䀿","䁆":"䁆","瞋":"瞋","𥉉":"𥉉","瞧":"瞧","⽭":"矛","⽮":"矢","⽯":"石","䂖":"䂖","𥐝":"𥐝","硏":"研","硎":"硎","硫":"硫","碌":"碌","碌":"碌","碑":"碑","磊":"磊","磌":"磌","磌":"磌","磻":"磻","䃣":"䃣","礪":"礪","⽰":"示","⺭":"礻","礼":"礼","社":"社","祈":"祈","祉":"祉","𥘦":"𥘦","祐":"祐","祖":"祖","祖":"祖","祝":"祝","神":"神","祥":"祥","視":"視","視":"視","祿":"祿","𥚚":"𥚚","禍":"禍","禎":"禎","福":"福","福":"福","𥛅":"𥛅","禮":"禮","⽱":"禸","⽲":"禾","秊":"秊","䄯":"䄯","秫":"秫","稜":"稜","穊":"穊","穀":"穀","穀":"穀","穏":"穏","⽳":"穴","突":"突","𥥼":"𥥼","窱":"窱","立":"立","⽴":"立","⻯":"竜","𥪧":"𥪧","𥪧":"𥪧","竮":"竮","⽵":"竹","笠":"笠","節":"節","節":"節","䈂":"䈂","𥮫":"𥮫","篆":"篆","䈧":"䈧","築":"築","𥲀":"𥲀","𥳐":"𥳐","簾":"簾","籠":"籠","⽶":"米","类":"类","粒":"粒","精":"精","糒":"糒","糖":"糖","糨":"糨","䊠":"䊠","糣":"糣","糧":"糧","⽷":"糸","⺯":"糹","𥾆":"𥾆","紀":"紀","紐":"紐","索":"索","累":"累","絶":"絕","絣":"絣","絛":"絛","綠":"綠","綾":"綾","緇":"緇","練":"練","練":"練","練":"練","縂":"縂","䌁":"䌁","縉":"縉","縷":"縷","繁":"繁","繅":"繅","𦇚":"𦇚","䌴":"䌴","⽸":"缶","𦈨":"𦈨","缾":"缾","𦉇":"𦉇","⽹":"网","⺫":"罒","⺲":"罒","⺱":"罓","䍙":"䍙","署":"署","𦋙":"𦋙","罹":"罹","罺":"罺","羅":"羅","𦌾":"𦌾","⽺":"羊","羕":"羕","羚":"羚","羽":"羽","⽻":"羽","翺":"翺","老":"老","⽼":"老","⺹":"耂","者":"者","者":"者","者":"者","⽽":"而","𦓚":"𦓚","⽾":"耒","𦔣":"𦔣","⽿":"耳","聆":"聆","聠":"聠","𦖨":"𦖨","聯":"聯","聰":"聰","聾":"聾","⾀":"聿","⺺":"肀","⾁":"肉","肋":"肋","肭":"肭","育":"育","䏕":"䏕","䏙":"䏙","腁":"胼","脃":"脃","脾":"脾","䐋":"䐋","朡":"朡","𦞧":"𦞧","𦞵":"𦞵","朦":"䑃","臘":"臘","⾂":"臣","臨":"臨","⾃":"自","臭":"臭","⾄":"至","⾅":"臼","舁":"舁","舁":"舁","舄":"舄","⾆":"舌","舘":"舘","⾇":"舛","⾈":"舟","䑫":"䑫","⾉":"艮","良":"良","⾊":"色","⾋":"艸","艹":"艹","艹":"艹","⺾":"艹","⺿":"艹","⻀":"艹","芋":"芋","芑":"芑","芝":"芝","花":"花","芳":"芳","芽":"芽","若":"若","若":"若","苦":"苦","𦬼":"𦬼","茶":"茶","荒":"荒","荣":"荣","茝":"茝","茣":"茣","莽":"莽","荓":"荓","菉":"菉","菊":"菊","菌":"菌","菜":"菜","菧":"菧","華":"華","菱":"菱","著":"著","著":"著","𦰶":"𦰶","莭":"莭","落":"落","葉":"葉","蔿":"蒍","𦳕":"𦳕","𦵫":"𦵫","蓮":"蓮","蓱":"蓱","蓳":"蓳","蓼":"蓼","蔖":"蔖","䔫":"䔫","蕤":"蕤","𦼬":"𦼬","藍":"藍","䕝":"䕝","𦾱":"𦾱","䕡":"䕡","藺":"藺","蘆":"蘆","䕫":"䕫","蘒":"蘒","蘭":"蘭","𧃒":"𧃒","虁":"蘷","蘿":"蘿","⾌":"虍","⻁":"虎","虐":"虐","虜":"虜","虜":"虜","虧":"虧","虩":"虩","⾍":"虫","蚩":"蚩","蚈":"蚈","蛢":"蛢","蜎":"蜎","蜨":"蜨","蝫":"蝫","蟡":"蟡","蝹":"蝹","蝹":"蝹","螆":"螆","䗗":"䗗","𧏊":"𧏊","螺":"螺","蠁":"蠁","䗹":"䗹","蠟":"蠟","⾎":"血","行":"行","⾏":"行","衠":"衠","衣":"衣","⾐":"衣","⻂":"衤","裂":"裂","𧙧":"𧙧","裏":"裏","裗":"裗","裞":"裞","裡":"裡","裸":"裸","裺":"裺","䘵":"䘵","褐":"褐","襁":"襁","襤":"襤","⾑":"襾","⻄":"西","⻃":"覀","覆":"覆","見":"見","⾒":"見","𧢮":"𧢮","⻅":"见","⾓":"角","⾔":"言","𧥦":"𧥦","詽":"訮","訞":"䚶","䚾":"䚾","䛇":"䛇","誠":"誠","說":"說","說":"說","調":"調","請":"請","諒":"諒","論":"論","諭":"諭","諭":"諭","諸":"諸","諸":"諸","諾":"諾","諾":"諾","謁":"謁","謁":"謁","謹":"謹","謹":"謹","識":"識","讀":"讀","讏":"讆","變":"變","變":"變","⻈":"讠","⾕":"谷","⾖":"豆","豈":"豈","豕":"豕","⾗":"豕","豣":"豜","⾘":"豸","𧲨":"𧲨","⾙":"貝","貫":"貫","賁":"賁","賂":"賂","賈":"賈","賓":"賓","贈":"贈","贈":"贈","贛":"贛","⻉":"贝","⾚":"赤","⾛":"走","起":"起","趆":"赿","𧻓":"𧻓","𧼯":"𧼯","⾜":"足","跋":"跋","趼":"趼","跺":"跥","路":"路","跰":"跰","躛":"躗","⾝":"身","車":"車","⾞":"車","軔":"軔","輧":"軿","輦":"輦","輪":"輪","輸":"輸","輸":"輸","輻":"輻","轢":"轢","⻋":"车","⾟":"辛","辞":"辞","辰":"辰","⾠":"辰","⾡":"辵","辶":"辶","⻌":"辶","⻍":"辶","巡":"巡","連":"連","逸":"逸","逸":"逸","遲":"遲","遼":"遼","𨗒":"𨗒","𨗭":"𨗭","邏":"邏","⾢":"邑","邔":"邔","郎":"郎","郞":"郎","郞":"郎","郱":"郱","都":"都","𨜮":"𨜮","鄑":"鄑","鄛":"鄛","⾣":"酉","酪":"酪","醙":"醙","醴":"醴","⾤":"釆","里":"里","⾥":"里","量":"量","金":"金","⾦":"金","鈴":"鈴","鈸":"鈸","鉶":"鉶","鋗":"鋗","鋘":"鋘","鉼":"鉼","錄":"錄","鍊":"鍊","鎮":"鎭","鏹":"鏹","鐕":"鐕","𨯺":"𨯺","⻐":"钅","⻑":"長","⾧":"長","⻒":"镸","⻓":"长","⾨":"門","開":"開","䦕":"䦕","閭":"閭","閷":"閷","𨵷":"𨵷","⻔":"门","⾩":"阜","⻏":"阝","⻖":"阝","阮":"阮","陋":"陋","降":"降","陵":"陵","陸":"陸","陼":"陼","隆":"隆","隣":"隣","䧦":"䧦","⾪":"隶","隷":"隷","隸":"隷","隸":"隷","⾫":"隹","雃":"雃","離":"離","難":"難","難":"難","⾬":"雨","零":"零","雷":"雷","霣":"霣","𩅅":"𩅅","露":"露","靈":"靈","⾭":"靑","⻘":"青","靖":"靖","靖":"靖","𩇟":"𩇟","⾮":"非","⾯":"面","𩈚":"𩈚","⾰":"革","䩮":"䩮","䩶":"䩶","⾱":"韋","韛":"韛","韠":"韠","⻙":"韦","⾲":"韭","𩐊":"𩐊","⾳":"音","響":"響","響":"響","⾴":"頁","䪲":"䪲","頋":"頋","頋":"頋","頋":"頋","領":"領","頩":"頩","𩒖":"𩒖","頻":"頻","頻":"頻","類":"類","⻚":"页","⾵":"風","𩖶":"𩖶","⻛":"风","⾶":"飛","⻜":"飞","⻝":"食","⾷":"食","⻟":"飠","飢":"飢","飯":"飯","飼":"飼","䬳":"䬳","館":"館","餩":"餩","⻠":"饣","⾸":"首","⾹":"香","馧":"馧","⾺":"馬","駂":"駂","駱":"駱","駾":"駾","驪":"驪","⻢":"马","⾻":"骨","䯎":"䯎","⾼":"高","⾽":"髟","𩬰":"𩬰","鬒":"鬒","鬒":"鬒","⾾":"鬥","⾿":"鬯","⿀":"鬲","⿁":"鬼","⻤":"鬼","⿂":"魚","魯":"魯","鱀":"鱀","鱗":"鱗","⻥":"鱼","⿃":"鳥","鳽":"鳽","䳎":"䳎","鵧":"鵧","䳭":"䳭","𪃎":"𪃎","鶴":"鶴","𪄅":"𪄅","䳸":"䳸","鷺":"鷺","𪈎":"𪈎","鸞":"鸞","鹃":"鹂","⿄":"鹵","鹿":"鹿","⿅":"鹿","𪊑":"𪊑","麗":"麗","麟":"麟","⿆":"麥","⻨":"麦","麻":"麻","⿇":"麻","𪎒":"𪎒","⿈":"黃","⻩":"黄","⿉":"黍","黎":"黎","䵖":"䵖","⿊":"黑","黒":"黑","墨":"墨","黹":"黹","⿋":"黹","⿌":"黽","鼅":"鼅","黾":"黾","⿍":"鼎","鼏":"鼏","⿎":"鼓","鼖":"鼖","⿏":"鼠","鼻":"鼻","⿐":"鼻","齃":"齃","⿑":"齊","⻬":"齐","⿒":"齒","𪘀":"𪘀","⻮":"齿","龍":"龍","⿓":"龍","龎":"龎","⻰":"龙","龜":"龜","龜":"龜","龜":"龜","⿔":"龜","⻳":"龟","⿕":"龠"}')
    }
}]);
//# sourceMappingURL=856.js.map
