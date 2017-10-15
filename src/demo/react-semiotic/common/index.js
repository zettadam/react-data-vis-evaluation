import {
  curveBasis,
  curveCardinal,
  curveCatmullRom,
  curveLinear,
  curveMonotoneX,
  curveMonotoneY,
  curveNatural,
  curveStep
} from 'd3-shape'

export ChartPanel from './ChartPanel'
export DemoHeader from './DemoHeader'
export InterpolationSelector from './InterpolationSelector'

export const CURVE_MAP = {
  'basis': curveBasis,
  'cardinal': curveCardinal,
  'catmullRom': curveCatmullRom,
  'linear': curveLinear,
  'monotoneX': curveMonotoneX,
  'monotoneY': curveMonotoneY,
  'natural': curveNatural,
  'step': curveStep
}
