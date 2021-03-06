/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 NEM
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {MosaicDTO} from "../../infrastructure/asset/MosaicDTO";
import {AssetId} from "./AssetId";

/**
 * A asset describes an instance of a asset definition. Assets can be transferred by means of a transfer transaction.
 */
export class Asset {

  /**
   * The asset id
   */
  public readonly assetId: AssetId;

  /**
   * The asset quantity. The quantity is always given in smallest units for the asset, i.e. if it has a divisibility of 3 the quantity is given in millis.
   */
  public readonly quantity: number;

  /**
   * constructor
   * @param assetId
   * @param quantity
   */
  constructor(
    assetId: AssetId,
    quantity: number,
  ) {
    this.assetId = assetId;
    this.quantity = quantity;
  }

  /**
   * @internal
   * @param dto
   * @returns {Asset}
   */
  public static createFromMosaicDTO(dto: MosaicDTO): Asset {
    return new Asset(
      AssetId.createFromMosaicIdDTO(dto.mosaicId),
      dto.quantity);
  }

  /**
   * @internal
   */
  public toDTO() {
    return {
      mosaicId: this.assetId,
      quantity: this.quantity
    }
  }
}
