'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classnames = require('@parrotjs/classnames');
var reactTransitionGroup = require('react-transition-group');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var CarouselContext = React.createContext({
    prefixCls: 'parrot-carousel',
    current: 0
});

var useLatest = (params) => {
    const latest = React.useRef();
    React.useEffect(() => {
        latest.current = params;
    });
    return latest;
};

function injecteIndex(children) {
    let result = [];
    React__default['default'].Children.forEach(children, (item, index) => {
        result.push(React__default['default'].cloneElement(item, {
            selfIndex: index,
            key: index
        }));
    });
    return result;
}

const CarouselDots = React__default['default'].forwardRef((props, ref) => {
    const { componentName = 'dots', className, children, selfIndex, length, onClick = () => { }, position } = props; __rest(props, ["componentName", "className", "children", "selfIndex", "length", "onClick", "position"]);
    const { prefixCls: customizedPrefixCls, current } = React.useContext(CarouselContext);
    const prefixCls = customizedPrefixCls + '-' + componentName;
    const classes = classnames__default['default'](prefixCls, className);
    const newArray = new Array(length).fill('');
    return (React__default['default'].createElement("div", { className: classnames__default['default'](classes), style: Object.assign({}, position) }, newArray.map((item, index) => (React__default['default'].createElement("div", { className: classnames__default['default'](`${prefixCls}-item`, {
            'active': current === index
        }), key: index, onClick: () => onClick(index) })))));
});
var Dots = React__default['default'].memo(CarouselDots);

const Carousel = React__default['default'].forwardRef((props, ref) => {
    const { prefixCls: customizedPrefixCls = 'parrot', componentName = 'carousel', className, children, initial = 0, autoplay = true, interval = 3000, hasDot = true, dotPosition = {}, extra } = props; __rest(props, ["prefixCls", "componentName", "className", "children", "initial", "autoplay", "interval", "hasDot", "dotPosition", "extra"]);
    const prefixCls = customizedPrefixCls + '-' + componentName;
    const classes = classnames__default['default'](prefixCls, className);
    const [current, setCurrent] = React.useState(initial);
    const latest = useLatest(current);
    const [itemLength] = React.useState(React__default['default'].Children.count(children));
    const timer = React.useRef(null);
    const autoPlay = () => {
        timer.current = setInterval(() => {
            setStep('next');
        }, interval);
    };
    const setStep = (direction) => {
        switch (direction) {
            case 'prev':
                let prevStep = latest.current - 1;
                if (prevStep === -1) {
                    prevStep = itemLength - 1;
                }
                setCurrent(prevStep);
                break;
            case 'next':
                let nextStep = latest.current + 1;
                if (nextStep === itemLength) {
                    nextStep = 0;
                }
                setCurrent(nextStep);
                break;
        }
    };
    const dotClick = (index) => {
        setCurrent(index);
        clearInterval(timer.current);
        timer.current = null;
        autoPlay();
    };
    React.useEffect(() => {
        if (autoplay) {
            autoPlay();
        }
        return () => {
            clearInterval(timer.current);
            timer.current = null;
        };
    }, [autoplay]);
    return (React__default['default'].createElement(CarouselContext.Provider, { value: {
            prefixCls,
            current
        } },
        React__default['default'].createElement("div", { className: classes },
            React__default['default'].createElement("div", { className: 'inner' }, injecteIndex(children)),
            hasDot && React__default['default'].createElement(Dots, { length: itemLength, onClick: dotClick, position: dotPosition }),
            extra)));
});
var Carousel$1 = React__default['default'].memo(Carousel);

const CarouselItem = React__default['default'].forwardRef((props, ref) => {
    const { componentName = 'item', className, children, selfIndex } = props;
    const { prefixCls: customizedPrefixCls, current } = React.useContext(CarouselContext);
    const prefixCls = customizedPrefixCls + '-' + componentName;
    const classes = classnames__default['default'](prefixCls, className);
    const visible = selfIndex === current;
    return (React__default['default'].createElement(reactTransitionGroup.CSSTransition, { mountOnEnter: true, unmountOnExit: true, appear: true, in: visible, timeout: 500, classNames: 'carousel' },
        React__default['default'].createElement("div", { className: classes }, children)));
});
var Item = React__default['default'].memo(CarouselItem);

exports.Item = Item;
exports.default = Carousel$1;
