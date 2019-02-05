import { DefaultModel } from '../default/default.model';

export class TakeoffModel extends DefaultModel {
  public status: boolean;
  public planeId: number;
  public pilotId: number;
}
