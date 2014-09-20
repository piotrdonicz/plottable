///<reference path="../reference.ts" />

module Plottable {
export module Animator {

  export class Arc extends Base {

    constructor() {
      super();
    }

    public animate(selection: any, attrToProjector: IAttributeToProjector): any {
      var startAttrToProjector: IAttributeToProjector = {};
      d3.keys(attrToProjector).forEach((attr: string) => startAttrToProjector[attr] = attrToProjector[attr]);

      startAttrToProjector["d"] = d3.svg.arc()
                                        .innerRadius(0)
                                        .outerRadius(0);

      selection.attr(startAttrToProjector);;
      return super.animate(selection, attrToProjector);
    }

  }

}
}
